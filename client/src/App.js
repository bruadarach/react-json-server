import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import EditContact from "./components/EditContact";
import api from "../src/api/contacts";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = async (newContact) => {
    const request = { ...newContact };
    const response = await api.post("/contacts", request);
    setContacts([response.data, ...contacts]);
  };

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    const getAllContents = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContents();
  }, []);

  const updateContactHandler = async (contact) => {
    const response = await api.put(`contacts/${contact.id}`, contact);
    const { id, name, address } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                contacts={contacts}
                setContacts={setContacts}
                addContactHandler={addContactHandler}
                removeContactHandler={removeContactHandler}
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/edit/:id"
            element={
              <EditContact
                contacts={contacts}
                updateContactHandler={updateContactHandler}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
