import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { StateType } from "./store";

const selectSelf = (state: StateType) => state;

export const selectStaticItems = createDraftSafeSelector(selectSelf, (state) => ({
  products: state.static.products,
  stock: state.static.stock,
}));
export const selectProductItems = createDraftSafeSelector(selectSelf, (state) => state.static.products);
export const selectStockItems = createDraftSafeSelector(selectSelf, (state) => state.static.stock);