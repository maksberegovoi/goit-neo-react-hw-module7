import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { addContact, fetchContacts, deleteContact } from "./contactsOps.js";
import { selectFilterName } from "./filtersSlice.js";

const pendingHandler = state => {
  state.loading = true;
  state.error = null;
};

const rejectedHandler = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, pendingHandler);
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchContacts.rejected, rejectedHandler);

    builder.addCase(addContact.pending, pendingHandler);
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items = [...state.items, action.payload];
      state.loading = false;
    });
    builder.addCase(addContact.rejected, rejectedHandler);

    builder.addCase(deleteContact.pending, pendingHandler);
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.loading = false;
    });
    builder.addCase(deleteContact.rejected, rejectedHandler);
  },
});

export const selectContacts = state => state.contacts.items;
export const selectContactsLoading = state => state.contacts.loading;
export const selectContactsError = state => state.contacts.error;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, nameFilter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);

export default contactsSlice.reducer;
