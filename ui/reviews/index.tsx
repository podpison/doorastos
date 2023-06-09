import { FC, useRef, useState } from 'react';
import SectionHeading from '../sectionHeading';
import Slider from "react-slick";
import Item, { ReviewItemType } from './Item';
import useResize from '@/hooks/useResize';

const itemsPerPortion = 1;

type Props = {
  items: ReviewItemType[]
}

const Reviews: FC<Props> = ({ items }) => {
  let windowWidth = useResize();
  const sliderRef = useRef<Slider>(null);
  const [currentPortion, setCurrentPortion] = useState(0);

  const hanldeBeforeChange = (oldIndex: number, newIndex: number) => {
    setCurrentPortion(newIndex);
  };
  const setNewPage = (operation: 'next' | 'prev') => {
    operation === 'next' ? sliderRef.current?.slickNext() : sliderRef.current?.slickPrev();
  };

  let portionsCount = Math.ceil(items.length / itemsPerPortion);

  let Items = items.map((i, index) => <Item
    portionsCount={portionsCount}
    currentPortion={currentPortion}
    windowWidth={windowWidth}
    setNewPage={setNewPage}
    {...i}
    key={index}
  />);

  return <section className='mt130-300'>
    <SectionHeading>Reviews about us</SectionHeading>
    <Slider
      className='mt40-50'
      beforeChange={hanldeBeforeChange}
      arrows={false}
      infinite={false}
      draggable={false}
      slidesToShow={itemsPerPortion}
      slidesToScroll={itemsPerPortion}
      ref={sliderRef}
    >
      {Items}
    </Slider>
  </section>
};

export default Reviews;