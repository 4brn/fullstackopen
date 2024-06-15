const Filter = ({ setSearch }) => (
  <input onChange={(event) => setSearch(event.target.value)} />
);

export default Filter;
