import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../store/contactsSlice';
import { nanoid } from 'nanoid'; 
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.list);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    const isContactExists = contacts.find(contact =>
      contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExists) {
      alert('This contact already exists');
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Number:
        <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
