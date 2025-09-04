import "./App.css";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps.js";
import ContactForm from "./components/ContactForm/ContactForm.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;
