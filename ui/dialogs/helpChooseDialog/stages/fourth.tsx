import { FC } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

const FourthStage: FC = () => {
  return <div className=''>
    <div className='flex flex-col gap-y-1'>
      <Dialog.Title className="text18-24 text-center">Thank you for your feedback!</Dialog.Title>
      <Dialog.Description className='text-esm text-center text-grey2 mx-auto'>We have received your application and will call you back as soon as possible.</Dialog.Description>
    </div>
    <svg className='mt-5 mx-auto esm:mt-10' width="60" height="46" viewBox="0 0 60 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M59.1214 1.84724C57.9499 0.675596 56.0505 0.675596 54.8787 1.84724L18.9369 37.7895L5.12139 23.974C3.94986 22.8024 2.05049 22.8025 0.87873 23.974C-0.29291 25.1455 -0.29291 27.0449 0.87873 28.2165L16.8155 44.1531C17.9867 45.3246 19.8875 45.3238 21.0582 44.1531L59.1214 6.08989C60.293 4.91837 60.2929 3.01888 59.1214 1.84724Z" fill="#0222A5" />
    </svg>
  </div>
};

export default FourthStage;