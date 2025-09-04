import React from "react";
import { useSelector } from "react-redux";
import {
  selectContactsError,
  selectContactsLoading,
  selectFilterContacts,
} from "../../redux/contactsSlice.js";
import Contact from "../Contact/Contact.jsx";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilterContacts);
  const isLoading = useSelector(selectContactsLoading);
  const isError = useSelector(selectContactsError);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <ul className={styles.list}>
        {isError && <div>Error loading!</div>}
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
