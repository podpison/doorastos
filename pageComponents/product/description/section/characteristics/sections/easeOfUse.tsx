import { FC } from 'react';
import SectionItem from './sectionItem';
import { ProductType } from '@/pages/catalog/[id]';

type Props = {
  data: ProductType['characteristics']['easeOfUse']
}

const EaseOfUse: FC<Props> = ({ data }) => {

  return <div className='mt-7'>
    <SectionItem name='door hinge type' value={data?.doorHingeType} />
    <SectionItem name='Number of door hinges' value={data?.numberOfDoorHinges} />
    <SectionItem name='Opening angle' value={data?.openingAngle} />
    <SectionItem name='Removable corners to replace the inner panel' value={data?.removableCornersToReplaceTheInnerPanel} />
    <SectionItem name='Functional valve' value={data?.functionalValve} />
    <SectionItem name='castle of invisibility' value={data?.castleOfInvisibility} />
    <SectionItem name='Electronic lock with fingerprint scanner' value={data?.electronicLockWithFingerprintScanner} />
    <SectionItem name='Latch adjuster' value={data?.latchAdjuster} />
    <SectionItem name='Closer' value={data?.closer} />
    <SectionItem name='Peephole height' value={data?.peepholeHeight} />
    <SectionItem name='Viewing angle of the peephole' value={data?.viewingAngleOfThePeephole} />
  </div>
};

export default EaseOfUse;