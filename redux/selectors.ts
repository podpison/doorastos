import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { StateType } from "./store";

const selectSelf = (state: StateType) => state;

export const selectProductItems = createDraftSafeSelector(selectSelf, (state) => state.static.products);