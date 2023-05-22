import { FC } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Item, { ItemType } from './item';

type Props = {
  setStage: () => void
}

const ranges = [
  {
    startPoint: 30_000,
    endPoint: 50_000
  },
  {
    startPoint: 50_000,
    endPoint: 70_000
  },
  {
    startPoint: 70_000,
    endPoint: 90_000
  },
  {
    startPoint: 90_000,
    endPoint: null
  },
] as ItemType[];

const SecondStage: FC<Props> = ({ setStage }) => {
  const Ranges = ranges.map((r, index) => <Item onClick={setStage} {...r} key={index} />);

  return <div className='w-fit mx-auto'>
    <Dialog.Title className="text-light font-normal text-center">Your budget:</Dialog.Title>
    <div className='flex flex-col gap-y-2.5 mt-5'>{Ranges}</div>
  </div>
};

export default SecondStage;