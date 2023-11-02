import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64cc42f62eafdcdc8519bb2a.mockapi.io';

export const fetchCar = createAsyncThunk(
  'car/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/adverts');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchCarId = createAsyncThunk(
  'car/fetchId',
  async (carId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/adverts/:${carId}`);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
