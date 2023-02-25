import PropTypes from 'prop-types';
import { BsFillPersonFill } from 'react-icons/bs';
import { ContactItem, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({id, name, number}) => (
        <ContactItem key={id}>
          <BsFillPersonFill size="16" />
          <span>{name}:</span>
          <span>{number}</span>
          <Button type="button" onClick={() => onDeleteContact(id)}>Delete</Button>
        </ContactItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
