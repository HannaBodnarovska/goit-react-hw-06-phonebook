import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { store } from '../store/store';
import styles from './App.module.css'; 

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList'; 
import Filter from '../components/Filter/Filter';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-06-phonebook"> 
        <div className={styles.container}>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
