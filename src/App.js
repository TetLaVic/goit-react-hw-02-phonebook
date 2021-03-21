import { Component } from 'react';
import './App.css';
import { v4 as genId } from 'uuid';

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleNewContact = ({ name, number }) => {
    const nameList = this.state.contacts.map(contact => contact.name);
    if (nameList.includes(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const updateState = {
      contacts: [...this.state.contacts, { name, id: genId(), number }],
    };
    this.setState({ ...this.state, ...updateState });
  };

  getContactsToShow = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name ? name.toLowerCase().includes(normalizedFilter) : false,
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleNewContact} />
        <h2>Contacts</h2>
        <Filter
          filterState={this.state.filter}
          onFilterChange={this.handleFilterChange}
        />
        <ContactList
          onContactsToShow={this.getContactsToShow}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
