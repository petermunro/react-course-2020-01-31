import React from "react";
import Contact from "./Contact";

function ContactList({ contacts }) {
  let contactComponents = contacts.map(contact => (
    <Contact
      address={contact.address}
      name={contact.fullName}
      email={contact.email}
      key={contact.id}
    />
  ));
  return <div>{contactComponents}</div>;
}

export default ContactList;
