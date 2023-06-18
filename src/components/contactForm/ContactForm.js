import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
<label className={css.label} htmlFor={nameInputId}>
  Name
  <input
    className={css.input}
    id={nameInputId}
    type="tel"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    value={name}
    onChange={handleInputChange}
  />
</label>
<label className={css.label} htmlFor={numberInputId}>
  Number
  <input
    className={css.input}
    id={numberInputId}
    type="number"
    name="number"
    value={number}
    onChange={handleInputChange}
    required
  />
<div className={css.button__wrapper}>
  <button className={css.button} type="submit">
    Add contact
  </button>
  </div>
</label>
</form>
  );
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};





export default ContactForm;

{/* <form className={css.form} onSubmit={handleSubmit}>
<label className={css.label} htmlFor={nameInputId}>
  Name
  <input
    className={css.input}
    id={nameInputId}
    type="tel"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    value={name}
    onChange={handleInputChange}
  />
</label>
<label className={css.label} htmlFor={numberInputId}>
  Number
  <input
    className={css.input}
    id={numberInputId}
    type="number"
    name="number"
    value={number}
    onChange={handleInputChange}
    required
  />
<div className={css.button__wrapper}>
  <button className={css.button} type="submit">
    Add contact
  </button>
  </div>
</label>
</form> */}
