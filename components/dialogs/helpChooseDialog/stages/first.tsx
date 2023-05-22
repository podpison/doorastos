import { FC } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

type Props = {
  setStage: () => void
}

const FirstStage: FC<Props> = ({ setStage }) => {
  return <div className='flex flex-col items-center w-full'>
    <Dialog.Title className="text-light font-normal">You need doors:</Dialog.Title>
    <div className='flex w-full mt-5'>
      <button className='text-esm w-full bg-blue1 text-white transition-colors py-2.5 hover:text-black hover:bg-line' onClick={setStage}>To the apartment</button>
      <button className='text-esm w-full bg-line text-black transition-colors py-2.5 hover:text-white hover:bg-blue1' onClick={setStage}>To the house</button>
    </div>
  </div>
};

export default FirstStage;