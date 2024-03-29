import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../components/contactForm/ContactForm';
import ContactList from '../components/contactList/ContactList.js';
import Filter from '../components/ContactFilter/ContactFiltr';
import css from './App.module.css';


// import ContactUs from './components/contactUs/ContactUs';
const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const  App =()=> {

 // первірка localstorage на наявність контактів
 const [contacts, setContacts] = useState(() => {
  return JSON.parse(localStorage.getItem('contacts')) ?? initialState;
});

const [filter, setFilter] = useState('');

//Збереження в локал сторідж
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  // Додаємо контакт
  const addContact = ({ name, number }) => {
    const normalizedFind = name.toLowerCase();
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedFind
    );
    if (findName) {
      return alert(`${name} is already in contacts`);
    }

    const findNumber = contacts.find(contact => contact.number === number);
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(contacts => [...contacts, newContact]);
  };

// видаленя контакту
const deleteContact = contactId =>{
  setContacts(contacts =>
    contacts.filter(contact => contact.id !== contactId)
  );
};

const handleFilter = e => {
  setFilter(e.currentTarget.value);
};

//медод класу який викликається один раз____________________
//_______________________________________________

 // фільтрація по імені

 const filterList = () => {
  const normalValue = filter.toLowerCase().trim();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalValue)
  );
};

const visibleContacts = filterList();





    return (
      <div className={css.container} >
        <div>Книга контактів</div>
<ContactForm onSubmit={addContact}  />
<Filter value={filter} onChange={handleFilter} />
<ContactList contacts={visibleContacts} onDeleteContact= {deleteContact} />
<div>
<p>
Загальна кількість контактів: {contacts.length}
</p>
  </div>



      </div>
    )
  }


export default App;
