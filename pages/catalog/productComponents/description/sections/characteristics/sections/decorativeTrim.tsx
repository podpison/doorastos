import { ProductType } from '@/redux/reducers/static';
import { FC } from 'react';
import SectionItem from './sectionItem';

type Props = {
  data: ProductType['characteristics']['decorativeTrim']
}

const DecorativeTrim: FC<Props> = ({ data }) => {

  return <div className='mt-7'>
    <SectionItem name='Coating of canvas and box' value={data.coatingOfCanvasAndBox} />
    <SectionItem name='Coating color' value={data.coatingColor} />
    <SectionItem name='Finishing outside' value={data.finishingOutside} />
    <SectionItem name='Finishing from the inside' value={data.finishingFromTheInside} />
    <SectionItem name='Decorative threshold' value={data.decorativeThreshold} />
  </div>
};

export default DecorativeTrim;