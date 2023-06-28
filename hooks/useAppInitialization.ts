import { fetchStaticItems } from "@/redux/reducers/static";
import { selectStaticItems } from "@/redux/selectors";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect, useInsertionEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAppInitialization = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { products, stock, reviews } = useSelector(selectStaticItems);
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useInsertionEffect(() => {
    dispatch(fetchStaticItems());
  }, []);

  useEffect(() => {
    if (products.length !== 0 && stock.length !== 0 && reviews.length !== 0) {
      setIsAppLoaded(true);
    };
  }, [products.length, stock.length]);

  return isAppLoaded;
};

export default useAppInitialization;