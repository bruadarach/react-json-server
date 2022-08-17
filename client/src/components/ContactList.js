import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  return (
    <>
      {props.contacts.map((contact) => {
        return (
          <ContactCard
            key={contact.id}
            contact={contact}
            removeContactHandler={props.removeContactHandler}
          />
        );
      })}
    </>
  );
};

export default ContactList;
