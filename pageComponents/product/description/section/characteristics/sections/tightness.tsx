import { FC } from 'react';
import SectionItem from './sectionItem';
import { ProductType } from '@/pages/catalog/[id]';

type Props = {
  data: ProductType['characteristics']['tightness']
}

const Tightness: FC<Props> = ({ data }) => {

  return <div className='mt-7'>
    <SectionItem name='Number of seal circuits' value={data?.numberOfSealCircuits} />
    <SectionItem name='Seal material' value={data?.sealMaterial} />
  </div>
};

export default Tightness;