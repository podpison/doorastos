import { selectProductItems } from '@/redux/selectors';
import { FC, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import Item from '@/ui/catalog/products/item';
import SliderPagination from '@/components/sliderPagination';
import useResize from '@/hooks/useResize';
import ChevronRounded from '@/components/chevronRounded';

type Props = {
  viewedProductsIds: number[] | undefined
}

const itemsPerPortion = 1;

const ProductsSlider: FC<Props> = ({ viewedProductsIds }) => {
  let windowWidth = useResize();
  let products = useSelector(selectProductItems);
  const sliderRef = useRef<Slider>(null);
  const [currentPortion, setCurrentPortion] = useState(0);

  let viewedProducts = products.filter(p => viewedProductsIds?.includes(p.id));
  let Items = viewedProducts.map(p => <Item {...p} key={p.id} />);
  let portionsCount = Math.ceil(viewedProducts.length / itemsPerPortion);

  const hanldeBeforeChange = (oldIndex: number, newIndex: number) => {
    setCurrentPortion(newIndex);
  };
  const setNewPage = (operation: 'next' | 'prev') => {
    operation === 'next' ? sliderRef.current?.slickNext() : sliderRef.current?.slickPrev();
  };

  return <div className='esm:max-w-[400px]'>
    <Slider
      className='mt-10'
      arrows={false}
      infinite={false}
      draggable={false}
      slidesToShow={itemsPerPortion}
      slidesToScroll={1}
      ref={sliderRef}
      beforeChange={hanldeBeforeChange}
    >
      {Items}
    </Slider>
    <div className='flex justify-between items-center gap-x-5 mt-5'>
      <div className='flex gap-x-5'>
        <ChevronRounded
          className='w-14 h-14'
          disabled={currentPortion === 0}
          chevronClassName='rotate-180'
          onClick={() => setNewPage('prev')}
          height={18}
          aria-label='Previous product'
        />
        <ChevronRounded
          className='w-14 h-14'
          disabled={currentPortion === portionsCount - 1}
          onClick={() => setNewPage('next')}
          height={18}
          aria-label='Next product'
        />
      </div>
      <SliderPagination
        className='w-[120px] esm:w-[150px]'
        portionsCount={portionsCount}
        windowWidth={windowWidth}
        currentPortion={currentPortion}
      />
    </div>
  </div>
};

export default ProductsSlider;