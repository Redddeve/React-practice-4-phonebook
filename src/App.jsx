import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { Wrapper } from 'styles/App.styled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const localContacts = JSON.parse(window.localStorage.getItem('Contacts'));
    if (localContacts?.length) {
      this.setState({ contacts: localContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        'Contacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  updateContact = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    const contExist = this.state.contacts.find(
      cont =>
        cont.name.toLowerCase() === name.toLowerCase() || cont.number === number
    );
    if (contExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, contact],
    }));
  };

  deleteContact = e => {
    const id = e.target.id;
    const newArr = this.state.contacts.filter(cont => cont.id !== id);
    this.setState({ contacts: newArr });
  };

  updateFilter = filter => {
    this.setState({
      filter,
    });
  };

  filterData = (data, filter) => {
    return data.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredData = this.filterData(
      this.state.contacts,
      this.state.filter
    );
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.onSubmit}
          updateContact={this.updateContact}
        />

        <h2>Contacts</h2>
        <Filter updateFilter={this.updateFilter} />
        <ContactList
          contacts={filteredData}
          deleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
