import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../store/contactsSlice';
import styles from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem'; 

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.list);
  const filter = useSelector((state) => state.contacts.filter.toLowerCase());

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <p>Total contacts: {filteredContacts.length}</p>
      <ul className={styles.list}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} onDeleteContact={handleDeleteContact} />
          ))
        ) : (
          <li>No contacts available</li>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
