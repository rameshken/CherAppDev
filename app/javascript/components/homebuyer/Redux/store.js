import { configureStore } from '@reduxjs/toolkit';
import favouriteSlice from './favouriteSlice';

export default configureStore({
  reducer: {
    favourites: favouriteSlice,
  },
});
