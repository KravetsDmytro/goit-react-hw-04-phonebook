import React from 'react';
import ContactForm from '../components/contactForm/ContactForm';
import ContactList from '../components/contactList/ContactList.js';
import Filter from '../components/ContactFilter/ContactFiltr';
import css from './App.module.css';


// import ContactUs from './components/contactUs/ContactUs';


class App extends React.Component {
  state = {
    contacts:  [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  // Додаємо контакт
  addContact = newContact => {
    // методперевірки  контакта чи не повторюється.
    const duplicateName = this.state.contacts.find(
      contact => contact.name === newContact.name
    );

    if (duplicateName) {
      alert(`${newContact.name} is already on contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  // фільтр та  записуємо у стейт
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  // Фільтруємо контакти та повертаємо результат фільтру
  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


// видаленя контакту
deleteContact = contactId =>{
this.setState(prevState =>({contacts:
   prevState.contacts.filter(contact => contact.id !==contactId),}));
};
//медод класу який викликається один раз____________________
componentDidMount () {
console.log('App comDidMou')
//зчитування з локал сторадж данних і запис іх в стейт.
const contacts=localStorage.getItem('contacts');
const parsedContacts= JSON.parse(contacts);

if(parsedContacts){this.setState({contacts: parsedContacts})}

}
//_______________________________________________

//медод класу який викликається кожного разу при змінах .
componentDidUpdate (prevProps, prevState) {
console.log('App com Update')
if(this.state.contacts !==prevState.contacts){
console.log('oновлення');

//запис в локалсторадж зміни контактів при апдейті та передає в componentDidMount.
localStorage.setItem('contacts', JSON.stringify(this.state.contacts));

}
}

  render() {
const {contacts} = this.state;
const { filter } = this.state;
const filteredResults = this.filterContacts();

    return (
      <div className={css.container} >
        <div>Книга контактів</div>
<ContactForm onSubmit={this.addContact}  />
<Filter value={filter} onChange={this.changeFilter} />
<ContactList contacts={filteredResults} onDeleteContact= {this.deleteContact} />
<div>
<p>
Загальна кількість контактів: {contacts.length}
</p>
  </div>



      </div>
    )
  }
}

export default App;
