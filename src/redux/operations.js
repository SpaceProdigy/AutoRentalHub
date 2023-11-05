import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://64cc42f62eafdcdc8519bb2a.mockapi.io',
});

export const fetchCar = createAsyncThunk(
  'car/fetchAll',
  async (page, { rejectWithValue }) => {
    try {
      const response = await instance.get('/adverts', {
        params: {
          page,
          limit: 12,
        },
      });
      const data = { cars: response.data, page: response.config.params.page };
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
