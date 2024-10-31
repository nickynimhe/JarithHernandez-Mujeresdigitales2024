import { configureStore } from '@reduxjs/toolkit';
import petsReducer from './slices/petsSlice';

export const store = configureStore({
  reducer: {
    pets: petsReducer,
  },
});
