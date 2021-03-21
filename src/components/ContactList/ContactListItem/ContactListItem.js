import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li id={id}>
      {name}: {number}
      <button
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
export default ContactListItem;
