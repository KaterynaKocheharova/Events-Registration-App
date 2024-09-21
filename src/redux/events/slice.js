import { createSlice } from "@reduxjs/toolkit";
import { fetchEvents } from "./operations";

export const handleError = (state, action) => {
  state.loading = null;
  state.error = action.payload;
};

const eventsInitialState = {
  items: [],
  totalPages: null,
  currentPage: 1,
  hasNextPage: true,
  hasPrevPage: false,
  loading: null,
  error: null,
};

// finish adjusting state
// go to the pagination
// handle it

const eventsSlice = createSlice({
  name: "events",
  initialState: eventsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = "fetching-events";
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        const { items, totalPages, hasNextPage, hasPrevPage } =
          action.payload.events;
        state.error = null;
        state.loading = null;
        state.items = items;
        state.hasNextPage = hasNextPage;
        state.hasPrevPage = hasPrevPage;
        state.totalPages = totalPages;
      })
      .addCase(fetchEvents.rejected, handleError);
  },
});

export const eventsReducer = eventsSlice.reducer;
