import { createSlice } from '@reduxjs/toolkit';

const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    dogs: [], 
    cats: [], 
    loading: false,
    error: null,
  },
  reducers: {
    fetchPetsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPetsSuccess(state, action) {
      state.loading = false;
      state.dogs = action.payload.dogs || []; 
      state.cats = action.payload.cats || []; 
    },
    fetchPetsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPetsStart, fetchPetsSuccess, fetchPetsFailure } = petsSlice.actions;

export default petsSlice.reducer;
