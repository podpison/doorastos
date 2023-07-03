import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import Item from './item';
import NothingFound from './nothingFound';
import { ProductType } from '@/redux/reducers/static';
import getPriceWithDiscount from '@/helpers/getPriceWithDiscount';
import Pagination from '@/ui/pagination';
import { PriceFromType, SecurityItemType } from '@/pages/catalog';
import { ActiveCategoryItemType } from '../settings/filter/categories/item';

type Props = {
  itemsPerPage?: number
  allItems: ProductType[]
  activeSecurityItem: SecurityItemType
  startPriceFromItem: PriceFromType
  whereItem: ProductType['where'] | undefined
  activeCategoryItems: ActiveCategoryItemType[]
  isPaginationReset: boolean
  setIsPaginationReset: Dispatch<SetStateAction<boolean>>
}

const Products: FC<Props> = ({ itemsPerPage = 3, allItems = [], activeSecurityItem, startPriceFromItem, whereItem, activeCategoryItems, isPaginationReset, setIsPaginationReset }) => {
  const [items, setItems] = useState<ProductType[]>(allItems); //filtred items
  const [itemsPortion, setItemsPortion] = useState<ProductType[]>(items); //portion of filtred items
  let Items = itemsPortion.map((i) => <Item {...i} key={i.id} />);

  useEffect(() => {
    let itemsCopy = [...allItems];

    let filtredBySecurity = activeSecurityItem !== null ? itemsCopy.filter(i => i.security === activeSecurityItem) : itemsCopy;
    let filtredByPrice = startPriceFromItem !== null ? filtredBySecurity.sort((a, b) => {
      let aPriceWithDiscount = getPriceWithDiscount(a.price, a?.discount?.value);
      let bPriceWithDiscount = getPriceWithDiscount(b.price, b?.discount?.value);

      return startPriceFromItem === 'Ascending' ? aPriceWithDiscount - bPriceWithDiscount : bPriceWithDiscount - aPriceWithDiscount;
    }) : filtredBySecurity;
    let filtredByWhere = whereItem !== undefined ? filtredByPrice.filter(i => i.where === whereItem) : filtredByPrice;
    let filtredByCategoryItems = activeCategoryItems.length !== 0 ? filtredByWhere.filter(item => {
      let filtredCategoryItems = activeCategoryItems.filter(c => c.items.some(ci => {
        if (c.category === 'price') {
          let priceRange = ci.includes('—')
            ? ci.split(' — ').map(p => p.replace(' ₽', '')).map(p => Number(p.replace(' ', ''))) //for a range
            : Number(ci.replace(' ₽ and more', '').replace(' ', '')); //for one price

          if (typeof priceRange === 'number') {
            return priceRange < item.price;
          };

          return priceRange[0] <= item.price && item.price <= priceRange[1];
        };

        return ci === item[c.category];
      }))

      return filtredCategoryItems.length === activeCategoryItems.length;
    }) : filtredByWhere;

    setItems(filtredByCategoryItems);
  }, [allItems, activeSecurityItem, startPriceFromItem, whereItem, activeCategoryItems]);

  useEffect(() => {
    setItemsPortion(items.slice(0, itemsPerPage));
  }, [items, itemsPerPage]);

  if (items.length === 0) {
    return <NothingFound />
  };

  return <div>
    <div
      className='grid gap-y-5 mt-10 esm:grid-cols-2 esm:gap-x-5 md:gap-x-10 smlg:grid-cols-3 smlg:gap-x-4 lg:gap-x-10'
      aria-label='Products'
    >
      {Items}
    </div>
    <Pagination
      items={items}
      setItems={(items) => setItemsPortion(items as ProductType[])}
      itemsPerPage={itemsPerPage}
      isReset={isPaginationReset}
      setIsReset={setIsPaginationReset}
    />
  </div>
};

export default Products;