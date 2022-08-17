import React from "react";
import AddContact from "../components/AddContact";
import ContactList from "../components/ContactList";

const Home = ({
  contacts,
  setContacts,
  addContactHandler,
  removeContactHandler,
}) => {
  return (
    <>
      <AddContact
        contacts={contacts}
        setContacts={setContacts}
        addContactHandler={addContactHandler}
      />
      <ContactList
        contacts={contacts}
        removeContactHandler={removeContactHandler}
      />
    </>
  );
};

export default Home;
