import { useInsertionEffect, useState } from "react";

const useAppInitialization = () => {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useInsertionEffect(() => {
    //We used to wait for all the items to be fetched here but, since all the fetching logic is in components, there is nothing to wait for. With that being said, we can't just remove this component (right?). We consider to add 1 second delay as a 'fake loading'
    let token = setTimeout(() => {
      setIsAppLoaded(true)
    }, 1000);

    return () => {
      clearTimeout(token);
    };
  }, []);

  return isAppLoaded;
};

export default useAppInitialization;