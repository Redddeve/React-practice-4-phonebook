import React from 'react';
import PropTypes from 'prop-types';
import { StyledBtn, StyledItem, StyledList } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <StyledList>
        {contacts.map(cont => (
          <StyledItem key={cont.id} id={cont.id}>
            {cont.name}: {cont.number}
            <StyledBtn onClick={() => deleteContact(cont.id)}>Delete</StyledBtn>
          </StyledItem>
        ))}
      </StyledList>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
