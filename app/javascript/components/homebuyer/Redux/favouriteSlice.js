import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    favourites: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.favourites.push(action.payload);
    },
  },
});

export const { addFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
