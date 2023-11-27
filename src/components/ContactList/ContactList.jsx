import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../store/contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.list);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.list}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <li key={contact.id} className={styles.item}>
            {contact.name}: {contact.number}
            <button className={styles.button} onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))
      ) : (
        <li>No contacts available</li>
      )}
    </ul>
  );
};

export default ContactList;
