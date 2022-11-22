import React from 'react';
import { ContactsList } from './ContactsList.styled';
import Contact from 'components/Contact';

export default function ContactList({ contacts, onChange }) {
  return (
    <ContactsList>
      {contacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onChange={onChange}
          />
        );
      })}
    </ContactsList>
  );
}
