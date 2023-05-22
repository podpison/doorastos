import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import staticReducer from './reducers/static';
import { createWrapper } from 'next-redux-wrapper';

const store = configureStore({
  reducer: {
    static: staticReducer,
  },
  devTools: true,
})

const reduxStore = createWrapper(() => store);

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default reduxStore;