import {configureStore} from '@reduxjs/toolkit';
import ArticalSlice from './appSlice';

export const store = configureStore({
  reducer: {
    ArticalReducer: ArticalSlice,
  },
});
