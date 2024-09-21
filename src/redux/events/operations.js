import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvents = createAsyncThunk(
  "events/fetchAll",
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get("/events");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
