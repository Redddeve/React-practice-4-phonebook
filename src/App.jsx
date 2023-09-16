import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { Wrapper } from 'styles/App.styled';

const App = () => {
  const [contacts, setContacts] = useState(setContactFunction);
  const [filter, setFilter] = useState('');

  function setContactFunction() {
    const localContacts = JSON.parse(window.localStorage.getItem('Contacts'));
    if (localContacts?.length) {
      return localContacts;
    } else {
      return [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
    }
  }

  useEffect(() => {
    window.localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const updateContact = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    const contExist = contacts.find(
      cont =>
        cont.name.toLowerCase() === name.toLowerCase() || cont.number === number
    );
    if (contExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, contact]);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(cont => cont.id !== id));
  };

  const updateFilter = filter => {
    setFilter(filter);
  };

  const filterData = (data, filter) => {
    return data.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredData = filterData(contacts, filter);

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm updateContact={updateContact} />

      <h2>Contacts</h2>
      <Filter updateFilter={updateFilter} />
      <ContactList contacts={filteredData} deleteContact={deleteContact} />
    </Wrapper>
  );
};

export default App;
