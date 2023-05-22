import { FC, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import FirstStage from './stages/first';
import SecondStage from './stages/second';
import ThirdStage from './stages/third';
import FourthStage from './stages/fourth';
import DialogBase from '../dialogBase';

type Props = {
  initialStage?: 1 | 2 | 3 | 4
} & Dialog.DialogProps

const HelpChooseDialog: FC<Props> = ({ open, initialStage, ...props }) => {
  const [stage, setStage] = useState(1);
  const handleStage = () => setStage(prev => prev + 1);

  useEffect(() => {
    if (open === false) {
      setStage(1);
    };
  }, [open, setStage]);

  useEffect(() => {
    if (initialStage !== undefined && stage < initialStage) {
      setStage(initialStage);
    };
  }, [initialStage, stage]);

  const Stages = [
    <FirstStage setStage={handleStage} />,
    <SecondStage setStage={handleStage} />,
    <ThirdStage setStage={handleStage} />,
    <FourthStage />,
  ];

  return <DialogBase className='min-h-[220px] max-w-[600px] focus:outline-none pb-10 pt-5 esm:min-h-[280px]' closeIconClassName='top-5 right-[10px]' open={open} {...props}>
    <div className='flex flex-col w-full max-w-[440px] m-auto pt-10'>
      {Stages[stage - 1]}
    </div>
    <div className='flex absolute bottom-0 left-0 w-full h-[3px] bg-grey4'>
      <span className='transition-all bg-black' style={{ width: `calc(25% * ${stage})` }} />
    </div>
  </DialogBase>
};

export default HelpChooseDialog;