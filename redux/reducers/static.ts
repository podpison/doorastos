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

const initialState = {
  products: [] as ProductType[]
}

export const fetchProducts = createAsyncThunk(
  'static/fetchProducts',
  async () => {
    let response = await axios.get('/api/products');

    return response.data;
  }
)

const staticReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    })
})

export default staticReducer;