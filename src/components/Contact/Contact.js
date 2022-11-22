import React from 'react';
import { ListItem, Number, Button, TextField } from './Contact.styled';

export default function Contact({ id, name, number, onChange }) {
  return (
    <ListItem id={id}>
      <TextField>
        {name}: <Number> {number}</Number>
      </TextField>
      <Button type="button" onClick={() => onChange(id)}>
        Delete
      </Button>
    </ListItem>
  );
}
