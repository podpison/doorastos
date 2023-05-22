import { fetchProducts } from "@/redux/reducers/static";
import { selectProductItems } from "@/redux/selectors";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect, useInsertionEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAppInitialization = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const products = useSelector(selectProductItems);
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useInsertionEffect(() => { //every data from the backend must be fetched here
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (products.length !== 0) {
      setIsAppLoaded(true);
    };
  }, [products.length]);

  return isAppLoaded;
};

export default useAppInitialization;