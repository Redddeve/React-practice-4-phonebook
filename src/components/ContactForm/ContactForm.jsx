import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledForm, StyledLabel } from './ContactForm.styled';

const ContactForm = ({ updateContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (name === '') {
      e.currentTarget.reset();
      return;
    }

    updateContact(name, number);
    e.currentTarget.reset();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel htmlFor="name">Name</StyledLabel>

      <input
        type="text"
        name="name"
        value={name}
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => setName(e.target.value)}
      />
      <StyledLabel htmlFor="number">Number</StyledLabel>
      <input
        type="tel"
        name="number"
        value={number}
        id="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={e => setNumber(e.target.value)}
      />
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};

ContactForm.propTypes = {
  onFormInput: PropTypes.func,
};

export default ContactForm;
