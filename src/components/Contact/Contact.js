import React from 'react';

export function Contact({ id, name, number, onChange }) {
  return (
    <li id={id} className="contacts-list__item">
      <span>{name}</span> <span> {number}</span>
      <button type="button" onClick={() => onChange(id)}>
        Delete
      </button>
    </li>
  );
}
