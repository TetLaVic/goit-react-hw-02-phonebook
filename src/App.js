import { Component } from 'react';
import './App.css';
import { v4 as genId } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  reset = () => {
    this.setState({ name: '' });
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    const currentState = this.state;
    const updateState = { [name]: value };
    this.setState({ ...currentState, ...updateState });
    // this.reset();
  };

  handleNewContact = event => {
    event.preventDefault();
    const currentState = this.state;
    const updateState = this.state.contacts.push(this.state.name);
    this.setState({ ...currentState, ...updateState });
    console.log(this.state);
  };

  render() {
    const nameInputId = genId();
    return (
      <>
        <form>
          <label htmlFor={nameInputId}>
            Name
            <input
              type="text"
              name="name"
              id={nameInputId}
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" onClick={this.handleNewContact}>
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => {
            return <li key={genId()}>{contact}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default App;
