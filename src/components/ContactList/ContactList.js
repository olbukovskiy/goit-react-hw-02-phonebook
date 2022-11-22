import React from 'react';
import { ContactsList } from './ContactsList.styled';
import Contact from 'components/Contact';
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onChange: PropTypes.func,
};
