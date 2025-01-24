import { useEffect, useState } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import './App.css';

const initialContactList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contactList, setContactList] = useState(
    () =>
      JSON.parse(localStorage.getItem('phoneContacts')) ?? initialContactList
  );
  const [inputSearch, setInputSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('phoneContacts', JSON.stringify(contactList));
  }, [contactList]);

  const addContact = values => {
    setContactList(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: values.username,
        number: values.usernumber,
      },
    ]);
  };
  const handleSearch = event => {
    setInputSearch(event.target.value);
  };
  const handleDeleteContact = id => {
    setContactList(prev => prev.filter(item => item.id !== id));
  };

  const visibleContacts = contactList.filter(item =>
    item.name.toLowerCase().includes(inputSearch.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="phonebook_title">Phonebook</h1>
      <ContactForm handleForm={addContact} />
      <SearchBox username={inputSearch} handleChange={handleSearch} />
      <ContactList
        contacts={visibleContacts}
        handleDeleteItem={handleDeleteContact}
      />
    </div>
  );
}

export default App;
