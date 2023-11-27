import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/contactsSlice';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.item}>
      <span>{contact.name}:</span>
      <span>{contact.number}</span>
      <button className={styles.button} onClick={() => handleDeleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
