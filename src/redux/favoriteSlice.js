import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
const { createSlice } = require('@reduxjs/toolkit');

const stateFavorite = {
  favorite: [],
  favoriteChangeButton: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: stateFavorite,
  reducers: {
    addToFavorite: (state, action) => {
      state.favorite.push(action.payload);
      state.favoriteChangeButton.push(action.payload.id);
    },

    removeFromFavorite: (state, action) => {
      const carId = action.payload.id;
      state.favorite = state.favorite?.filter(({ id }) => id !== carId);
      state.favoriteChangeButton = state.favoriteChangeButton?.filter(
        id => id !== carId
      );
    },
  },
});

const persistConfiFavorite = {
  key: 'favorite',
  storage,
  whitelist: ['favorite', 'favoriteChangeButton'],
};

export const favoriteReducer = persistReducer(
  persistConfiFavorite,
  favoriteSlice.reducer
);

export const getFavorite = state => state.favorite.favorite;
export const getFavoriteChangeButton = state =>
  state.favorite.favoriteChangeButton;

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
