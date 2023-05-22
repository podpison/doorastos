import { FC, useEffect, useState } from 'react';
import Item from './item';
import NothingFound from './nothingFound';
import { ProductType } from '@/redux/reducers/static';
import { PriceFromType, SecurityItemType } from '..';
import getPriceWithDiscount from '@/helpers/getPriceWithDiscount';
import { ActiveCategoryItemType } from '../settings/filter/categories/item';
import Pagination from '@/components/pagination';

type Props = {
  itemsPerPage: number
  allItems: ProductType[]
  activeSecurityItem: SecurityItemType
  startPriceFromItem: PriceFromType
  whereItem: ProductType['where'] | undefined
  activeCategoryItems: ActiveCategoryItemType[]
}

const Products: FC<Props> = ({ itemsPerPage, allItems, activeSecurityItem, startPriceFromItem, whereItem, activeCategoryItems }) => {
  const [items, setItems] = useState<ProductType[]>(allItems); //filtred items
  const [itemsPortion, setItemsPortion] = useState<ProductType[]>(items); //portion of filtred items
  const [isPaginationReset, setIsPaginationReset] = useState(false);

  let Items = itemsPortion.map((i) => <Item {...i} key={i.id} />);

  useEffect(() => {
    let itemsCopy = [...allItems];

    let filtredBySecurity = activeSecurityItem !== null ? itemsCopy.filter(i => i.security === activeSecurityItem) : itemsCopy;
    let filtredByPrice = startPriceFromItem !== null ? filtredBySecurity.sort((a, b) => {
      let aPriceWithDiscount = getPriceWithDiscount(a.price, a?.discount);
      let bPriceWithDiscount = getPriceWithDiscount(b.price, b?.discount);

      return startPriceFromItem === 'Ascending' ? aPriceWithDiscount - bPriceWithDiscount : bPriceWithDiscount - aPriceWithDiscount;
    }) : filtredBySecurity;
    let filtredByWhere = whereItem !== undefined ? filtredByPrice.filter(i => i.where === whereItem) : filtredByPrice;
    let filtredByCategoryItems = activeCategoryItems.length !== 0 ? filtredByWhere.filter(item => {
      let filtredCategoryItems = activeCategoryItems.filter(c => c.items.some(ci => {
        if (c.category === 'price') {
          let priceRange = ci.includes('—')
            ? ci.split(' — ').map(p => p.replace(' ₽', '')).map(p => Number(p.replace(' ', ''))) //for a range
            : Number(ci.replace(' ₽ and more', '').replace(' ', '')); //for a one price

          if (typeof priceRange === 'number') {
            return priceRange < item.price;
          };

          return priceRange[0] < item.price && item.price < priceRange[1];
        };

        return ci === item[c.category];
      }))

      return filtredCategoryItems.length === activeCategoryItems.length;
    }) : filtredByWhere;

    setItems(filtredByCategoryItems);
    setIsPaginationReset(true);
  }, [allItems, activeSecurityItem, startPriceFromItem, whereItem, activeCategoryItems]);

  useEffect(() => {
    setItemsPortion(items.slice(0, itemsPerPage));
    setIsPaginationReset(true);
  }, [items.length]);

  if (items.length === 0) {
    return <NothingFound />
  };

  return <div data-testid="catalog">
    <div
      className='grid gap-y-5 mt-10 esm:grid-cols-2 esm:gap-x-5 md:gap-x-10 smlg:grid-cols-3 smlg:gap-x-4 lg:gap-x-10'
      data-testid='items'
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