import { useEffect, useState } from 'react';

const useResize = (callback?: (newWidth: number) => void, dependencies?: any[]) => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (size === 0) { //the first call
      setSize(window.innerWidth);
    };

    const eventCallback = () => {
      setSize(window.innerWidth);
      callback && callback(window.innerWidth);
    };
 
    window.addEventListener('resize', eventCallback);
    return () => window.removeEventListener('resize', eventCallback);
  }, dependencies || []);

  return size;
};

export default useResize;