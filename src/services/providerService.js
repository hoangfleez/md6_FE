import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import customAPI from "./customAPI.js";

export const getProvider = createAsyncThunk(
  "provider/getProvider",
  async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8181/providers");
      return res.data.data.docs;
    } catch (err) {
      return err.response.data.payload;
    }
  }
);

export const addProvider = createAsyncThunk(
  "provider/addProvider",
  async (provider) => {
    try {
      const res = await customAPI().post("providers", provider);
      console.log(res.data);
      return res.data;
    } catch (err) {
      return err.response.data.payload;
    }
  }
);

export const getProviderDetail = createAsyncThunk(
  "provider/getProviderDetail",
  async (id) => {
    try {
      const res = await customAPI().get(`providers/providerDetail/${id}`);
      return res.data;
    } catch (err) {
      return err.response.data.payload;
    }
  }
);

export const searchProviders = createAsyncThunk(
  "provider/searchProviders",
  async (name) => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8181/providers?name=${name}`
      );
      return res.data.data.docs;
    } catch (err) {
      return err.response.data.payload;
    }
  }
);

export const newlyJoinedProviders = createAsyncThunk(
  "provider/newlyJoinedProviders",
  async (name) => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8181/providers/newlyJoinedProviders`
      );
      console.log(res.data, 7777);
      return res.data.data;
    } catch (err) {
      return err.response.data.payload;
    }
  }
);

export const filterProvider = createAsyncThunk(
  "provider/filterProvider",
  async (arrbox) => {
    return arrbox;
  }
);

export const showProviderByUser = createAsyncThunk(
  "provider/showProviderByUser",
  async () => {
    try {
      const res = await customAPI().get("providers/providerDetailByUser");
      return res.data;
    } catch (err) {
      return err.response.data.payload;
    }
  }
);

export const buttonOn = createAsyncThunk("providers/buttonOn", async (id) => {
  try {
    const res = await axios.put(
      `http://127.0.0.1:8181/providers/publicProvider/${id}`
    );
    console.log(res.data)
    return res.data;
  } catch (err) {
    return err.response.data;
  }
});

export const buttonOff = createAsyncThunk("providers/buttonOff", async (id) => {
  try {
    const res = await axios.put(
      `http://127.0.0.1:8181/providers/privateProvider/${id}`
    );
    console.log(res.data)
    return res.data;
  } catch (err) {
    return err.response.data;
  }
});
