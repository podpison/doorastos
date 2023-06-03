import { ProductType } from '@/redux/reducers/static';
import { FC } from 'react';
import SectionItem from './sectionItem';

type Props = {
  data: ProductType['characteristics']['protectionAgainstBreaking']
}

const ProtectionAgainstBreaking: FC<Props> = ({ data }) => {

  return <div className='mt-7'>
    <SectionItem name='Number of metal sheets' value={data?.numberOfMetalSheets} />
    <SectionItem name='metal thickness' value={data?.metalThickness} />
    <SectionItem name='Number of stiffeners' value={data?.numberOfStiffeners} />
    <SectionItem name='Number of anti-removable clips (static bolts)' value={data?.numberOfAntiRemovableClips} />
    <SectionItem name='Number of locks' value={data?.numberOfLocks} />
    <SectionItem name='lock brand' value={data?.lockBrand} />
    <SectionItem name='Lock class' value={data?.lockClass} />
    <SectionItem name='Armor plate' value={data?.armorPlate} />
    <SectionItem name='Armor package' value={data?.armorPackage} />
    <SectionItem name='Night valve' value={data?.nightValve} />
  </div>
};

export default ProtectionAgainstBreaking;