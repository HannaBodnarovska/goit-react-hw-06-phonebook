import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../store/contactsSlice';
import styles from './Filter.module.css'; 

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  const handleFilterChange = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <div className={styles.label}>
      <label>
        Find contacts by name:
        <input type="text" value={filter} onChange={handleFilterChange} className={styles.input} />
      </label>
    </div>
  );
};

export default Filter;
