import CircledBtn from '@/components/circledBtn';
import HelpChooseDialog from '@/components/dialogs/helpChooseDialog';
import { FC, useState } from 'react';

const NothingFound: FC = () => {
  const [isCDOpen, setIsCDOpen] = useState(false); //CD - consultation dialog
  
  const handleCDStatus = () => {
    setIsCDOpen(prev => !prev);
  };

  return <div className='flex flex-col gap-y-7 items-center mt-24 esm:gap-y-10 md:gap-y-14'>
    <div className='flex flex-col gap-y-1 items-center'>
      <h6 className='text16-20 text-center'>Sorry, nothing was found matching your criteria.</h6>
      <p className='text-esm text-grey2 text-center'>But our team of professionals is ready to realize doors of any complexity for you.</p>
    </div>
    <CircledBtn className='bg-blue1 w-[150px] h-[150px] hover:bg-blue2' textClassName='text-esm text-white' onClick={handleCDStatus}>Get a consultation</CircledBtn>
    <HelpChooseDialog open={isCDOpen} initialStage={3} onOpenChange={status => setIsCDOpen(status)} />
  </div>
};

export default NothingFound;