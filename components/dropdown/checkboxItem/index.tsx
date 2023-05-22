import { FC, useState } from 'react';
import Checkbox from '../../checkbox';
import AdditionalInfoDialog, { AdditionalInfoType } from '../../dialogs/additionalInfoDialog';

export type DropdownCheckboxItemType = {
  text: string
  info?: AdditionalInfoType
}

type Props = {
  isActive: boolean
  onClick: () => void
} & DropdownCheckboxItemType

const CheckboxItem: FC<Props> = ({ text, isActive, onClick, info }) => {
  const [isAIDOpen, setIsAIDOpen] = useState(false); //AID - additional item dialog
  const handleAIDStatus = () => setIsAIDOpen(prev => !prev);

  return <div className='grid grid-cols-[1fr_max-content] items-center w-full'>
    <div className='group flex items-center gap-x-2 w-full' onClick={onClick}>
      <Checkbox checked={isActive} />
      <label className='text-[12px] text-grey1 cursor-pointer text-left w-full group-hover:text-black group-active:text-black'>{text}</label>
    </div>
    {info && <AdditionalInfoDialog open={isAIDOpen} onOpenChange={status => setIsAIDOpen(status)} openDialog={handleAIDStatus} heading={text} {...info} />}
  </div>
};

export default CheckboxItem;