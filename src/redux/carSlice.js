import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { fetchCar, fetchCarId } from './operations';

const stateCars = {
  cars: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulFilledStandart = state => {
  state.isLoading = false;
  state.error = null;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: stateCars,
  extraReducers: builder =>
    builder
      .addCase(fetchCar.pending, handlePending)
      .addCase(fetchCar.rejected, handleRejected)
      .addCase(fetchCarId.pending, handlePending)
      .addCase(fetchCarId.rejected, handleRejected)

      .addCase(fetchCar.fulfilled, (state, action) => {
        handleFulFilledStandart(state);

        state.cars = action.payload;
      })

      .addCase(fetchCarId.fulfilled, (state, action) => {
        handleFulFilledStandart(state);
        state.cars.push(action.payload);
      }),
});

const persistConfiFavorit = {
  key: 'favorit',
  storage,
  whitelist: ['favorit'],
};

export const carsReducer = persistReducer(
  persistConfiFavorit,
  carsSlice.reducer
);

export const getCars = state => state.cars.cars;
// export const getFilter = state => state.filter.filterText;
// export const getState = state => state.contacts;
