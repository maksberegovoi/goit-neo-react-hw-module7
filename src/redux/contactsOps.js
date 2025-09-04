import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://68b9d96f6aaf059a5b58eb78.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const response = await axios.get("/contacts");
  return response.data;
});

export const addContact = createAsyncThunk("contacts/addContact", async contact => {
  const response = await axios.post("/contacts", contact);
  return response.data;
});

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async contactId => {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  }
);
