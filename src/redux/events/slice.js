import { createSlice } from "@reduxjs/toolkit";
import { fetchEvents } from "./operations";

const eventsInitialState = {
  items: [],
  totalPages: 1,
  currentPage: 1,
  loading: false,
  error: null,
};

export const handleError = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const eventsSlice = createSlice({
  name: "events",
  initialState: eventsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        const { items, totalPages, hasNextPage, hasPrevPage } =
          action.payload.events;
        state.error = null;
        state.loading = false;
        state.items = items;
        state.hasNextPage = hasNextPage;
        state.hasPrevPage = hasPrevPage;
        state.totalPages = totalPages;
      })
      .addCase(fetchEvents.rejected, handleError);
  },
  reducers: {
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const eventsReducer = eventsSlice.reducer;
export const { changeCurrentPage } = eventsSlice.actions;
