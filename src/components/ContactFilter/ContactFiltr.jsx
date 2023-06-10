import PropTypes from 'prop-types';
import css from './ContactFilter.module.css';

// Приймаємо значення поля фільтра та Метод,записуючий у стейт
const Filter = ({ value, onChange }) => {
  return (
    <label className={css.label}>
Пошук контактів
      <input
        type="text"
        name="filter"
        className={css.input}
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};

Filter.defaultProps = {
  value: '',
};


Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
