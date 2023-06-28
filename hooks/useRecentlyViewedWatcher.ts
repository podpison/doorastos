import { useEffect } from "react";
import { useCookies } from "react-cookie";

const useRecentlyViewedWatcher = (productId: number | undefined) => {
  const [cookies, setCookie] = useCookies(['viewedProducts']);

  let cd = new Date(); //current date

  const setVPCookie = (data: number[]) => {
    setCookie('viewedProducts', JSON.stringify(data), {
      expires: new Date(cd.setMonth(cd.getMonth() + 1)), //expires in a month
      path: '/',
    });
  };

  useEffect(() => {
    let viewedProducts = cookies.viewedProducts as (number[] | undefined);

    if (productId === undefined) return;

    if (!viewedProducts) {
      setVPCookie([productId]);

      return;
    } else {
      if (viewedProducts.includes(productId)) return;

      if (viewedProducts.length === 5) {
        setVPCookie([...viewedProducts.slice(1), productId]);

        return;
      };
      
      setVPCookie([...viewedProducts, productId]);
    };

  }, [productId]);
};

export default useRecentlyViewedWatcher;