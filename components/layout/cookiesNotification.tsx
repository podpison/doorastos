import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import CircledBtn from '../circledBtn';
import { useCookies } from 'react-cookie';

const CookiesNotification: FC = () => {
  const [cookies, setCookie] = useCookies(['areCookiesAccepted']);
  const [isClosed, setIsClosed] = useState(true); //for some unexpected for me reasons, without the useState and useEffect the component shows updated data in the console and not refreshes the component

  const handleAcceptedStatus = () => {
    let cd = new Date(); //current date

    setCookie('areCookiesAccepted', true, {
      path: '/',
      expires: new Date(`${cd.getFullYear() + 1}-${cd.getMonth()}-${cd.getDate()} 00:00:00`),
    });
    
    setIsClosed(true);
  };

  useEffect(() => {
    let areAccepted = Boolean(cookies?.areCookiesAccepted) as boolean | undefined;

    setIsClosed(areAccepted || false);
  }, [cookies]);

  return <div
    className={cn(
      'fixed bottom-0 left-0 w-screen bg-blue1 px-2.5 py-5 esm:px-5 esm:py-7 md:py-10 md:px-8 smlg:px-12',
      isClosed && 'hidden'
    )}
  >
    <div className='flex justify-between items-center gap-x-10 max-w-[655px] mx-auto'>
      <div className='flex flex-col gap-y-1'>
        <h6 className='text-white text-[10px] max-w-[18em] esm:text-[14px]'>This site uses cookies to improve the quality of the service.</h6>
        <p className='text-[8px] text-grey4 max-w-[26em] esm:text-[12px]'>By continuing to use our site, you automatically agree to the use of these technologies</p>
      </div>
      <CircledBtn className='border border-white w-[70px] h-[70px] esm:w-[100px] esm:h-[100px] md:w-[110px] md:h-[110px]' textClassName='text-white text-[14px]' onClick={handleAcceptedStatus}>Accept</CircledBtn>
    </div>
  </div>
};

export default CookiesNotification;