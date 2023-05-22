import { useInsertionEffect, useState } from "react";
import { motion } from 'framer-motion';

export const DisabledInternetWarning: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);

  useInsertionEffect(() => {
    const callback = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);

    return () => {
      window.removeEventListener('online', callback);
      window.removeEventListener('offline', callback);
    };
  }, [isOnline]);

  return <motion.div
    className='leftContainer fixed bottom-0 flex justify-center w-screen z-[110]'
    animate={{
      y: isOnline ? 200 : 0
    }}
    initial={false}
  >
    <div
      className='w-fit h-fit bg-red px-3 py-4'
    >
      <p className='text18 text-white'>Looks like there is no internet connection...</p>
    </div>
  </motion.div>
};