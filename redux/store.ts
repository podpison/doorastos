import { configureStore } from '@reduxjs/toolkit';
import staticReducer from './reducers/static';
import { createWrapper } from 'next-redux-wrapper';

export const store = configureStore({
  reducer: {
    static: staticReducer,
  },
  devTools: true,
})

const reduxWrapper = createWrapper(() => store);

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default reduxWrapper;