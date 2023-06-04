import { FC } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import PhoneForm, { PhoneFormTypeType } from '@/components/forms/phoneForm';
import { RangeItemType } from './second';

type Props = {
  setStage: () => void
  where: "apartment" | "house" | null
  price: RangeItemType | null
  heading?: string
  type?: PhoneFormTypeType
}

const defaultHeading = 'Our manager will call you back within a short time, select the best option and answer any questions';

const ThirdStage: FC<Props> = ({ setStage, type, heading = defaultHeading }) => {
  return <div className='flex flex-col gap-y-5'>
    <Dialog.Title className="text-light font-normal text-center mx-auto max-w-[18em]">{heading}</Dialog.Title>
    <PhoneForm
      className='grid justify-center gap-x-7 [&>button]:mx-auto [&>button]:max-esm:mt-7 [&>button]:md:w-[120px] [&>button]:md:h-[120px] esm:grid-cols-[1fr_max-content] esm:items-center'
      type={type}
      onSubmit={setStage}
    />
  </div>
};

export default ThirdStage;