import { createSlice } from '@reduxjs/toolkit';
import { fetchCar } from './operations';

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

      .addCase(fetchCar.fulfilled, (state, action) => {
        handleFulFilledStandart(state);
        const { cars, page } = action.payload;
        if (page === 1) {
          state.cars = cars;
        } else {
          state.cars = [...state.cars, ...cars];
        }
      }),
});

export const carsReducer = carsSlice.reducer;
export const getCars = state => state.cars.cars;
export const getisLoading = state => state.cars.isLoading;
