import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = { name: '', number: '' };

  nameIdInput = shortid.generate();
  numberIdInput = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const contact = {
       id:shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(contact);

    this.resetForm();
  };

  // Зброс полів форми (після відправки)
  resetForm = () => {
    this.setState({
      id: '',
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label} htmlFor={this.nameIdInput}>
          Name
          <input
            className={css.input}
            id={this.nameIdInput}
            type="tel"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={css.label} htmlFor={this.numberIdInput}>
          Number
          <input
            className={css.input}
            id={this.numberIdInput}
            type="number"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
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
}

export default ContactForm;
