import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, handleDeleteItem }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(item => (
        <Contact
          key={item.id}
          name={item.name}
          phone={item.number}
          handleDelete={() => handleDeleteItem(item.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
