import { createSlice } from "@reduxjs/toolkit";
import { fetchEvents } from "./operations";

export const handleError = (state, action) => {
  state.loading = null;
  state.error = action.payload;
};

const eventsInitialState = {
  items: [],
  loading: null,
  error: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState: eventsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = "fetching-events";
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.error = null;
        state.loading = null;
        state.items = action.payload;
      })
      .addCase(fetchEvents.rejected, handleError);
  },
});

export const eventsReducer = eventsSlice.reducer;
