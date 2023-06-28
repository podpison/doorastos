import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { StateType } from "./store";

const selectSelf = (state: StateType) => state;

export const selectStaticItems = createDraftSafeSelector(selectSelf, (state) => state.static);
export const selectProductItems = createDraftSafeSelector(selectSelf, (state) => state.static.products);
export const selectStockItems = createDraftSafeSelector(selectSelf, (state) => state.static.stock);
export const selectReviewItems = createDraftSafeSelector(selectSelf, (state) => state.static.reviews);