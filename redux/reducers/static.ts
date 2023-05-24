import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export type ProductType = {
  name: string
  img: string
  price: number
  material: string
  id: number
  security: 'With thermal break' | 'Tamperproof' | 'Armored'
  where: 'apartment' | 'house'
  finishing: string
  color: string
  discount?: number
}

export type StockItemType = {
  heading: string
  description: string
  img: {
    src: string
    alt: string
  }
  id: number
}

const initialState = {
  products: [] as ProductType[],
  stock: [] as StockItemType[],
}

export type StaticStateType = typeof initialState

export const fetchStaticItems = createAsyncThunk(
  'static/fetchStaticItems',
  async () => {
    let response = await axios.get('/api/staticItems');

    return response.data as StaticStateType;
  }
);

const staticReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchStaticItems.fulfilled, (state, action) => {
      return {...state, ...action.payload};
    })
});

export default staticReducer;