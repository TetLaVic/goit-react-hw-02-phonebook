import { Component } from 'react';
import ContactListItem from './ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

class ContactList extends Component {
  render() {
    const { onContactsToShow, onDeleteContact } = this.props;
    const contactsList = onContactsToShow();
    return (
      <ul>
        {contactsList.map(({ name, number, id }) => {
          return (
            <ContactListItem
              name={name}
              number={number}
              key={id}
              id={id}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  onContactsToShow: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
