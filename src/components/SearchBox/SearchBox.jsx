import styles from './SearchBox.module.css';

const SearchBox = ({ username, handleChange }) => {
  return (
    <label className={styles.searchField}>
      <span>Find Contacts by name</span>
      <input
        className={styles.searchInput}
        type="text"
        name="search"
        value={username}
        onChange={handleChange}
      />
    </label>
  );
};

export default SearchBox;
