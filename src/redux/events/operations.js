import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://events-service-ff1w.onrender.com";

export const fetchEvents = createAsyncThunk(
  "events/fetchAll",
  async ({ page, perPage }, thunkAPI) => {
    try {
      const { data } = await axios.get("/events", {
        params: {
          page,
          perPage,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
