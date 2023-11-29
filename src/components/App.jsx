import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import styles from './App.module.css'; 

const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;
