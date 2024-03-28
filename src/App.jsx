// import contacts from "./contacts.json";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

const STORAGE_KEY = "contacts";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem(STORAGE_KEY);
    const parsedContacts = JSON.parse(stringifiedContacts) || [];
    return parsedContacts.length ? parsedContacts : contacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const contact = {
      ...newContact,
      id: nanoid(),
    };
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const onDeleteContact = (userId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== userId)
    );
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={onDeleteContact} />
    </>
  );
}

export default App;
