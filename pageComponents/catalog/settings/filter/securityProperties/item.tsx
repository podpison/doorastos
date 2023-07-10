import Checkbox from '@/ui/checkbox';
import AdditionalInfoDialog, { AdditionalInfoType } from '@/ui/dialogs/additionalInfoDialog';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import cn from 'classnames';
import { SecurityItemType } from '@/pages/catalog';
import { ProductType } from '@/pages/catalog/[id]';

type Props = {
  text: ProductType['security'];
  info: AdditionalInfoType
  activeItem: SecurityItemType
  setActive: Dispatch<SetStateAction<SecurityItemType>>
}

const Item: FC<Props> = ({ text, info, activeItem, setActive }) => {
  const [isAIDOpen, setIsAIDOpen] = useState(false); //AID - additional item dialog

  let isActive = activeItem === text;

  const handleAIDStatus = () => setIsAIDOpen(prev => !prev);
  const handleCheckboxClick = () => setActive(isActive ? null : text);

  return <div
    className={cn(
      'group flex items-center justify-between gap-x-2 w-full border-y cursor-pointer transition-colors hover:border-grey2 active:border-grey2 lg:gap-x-2',
      isActive ? 'border-grey2' : 'border-line',
    )}
  >
    <div
      className='flex items-center gap-x-2 w-full'
      aria-label={`set ${text} security property`}
    >
      <Checkbox checked={isActive} variant='single' id={text} onClick={handleCheckboxClick} onKeyDown={e => e.key === 'Enter' && handleCheckboxClick()} />
      <label className='transition-colors text-grey1 text-[14px] w-full cursor-pointer py-2.5 group-hover:text-black' htmlFor={text}>{text}</label>
    </div>
    <AdditionalInfoDialog open={isAIDOpen} onOpenChange={status => setIsAIDOpen(status)} openDialog={handleAIDStatus} heading={text} {...info} />
  </div>
};

export default Item;