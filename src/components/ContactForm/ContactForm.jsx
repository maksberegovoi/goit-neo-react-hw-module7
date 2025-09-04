import React from "react";
import { Field, Form, Formik } from "formik";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps.js";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <Field className={styles.field} name="name" placeholder="Enter contact name..." />
        <Field
          className={styles.field}
          name="number"
          placeholder="Enter contact number..."
        />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
