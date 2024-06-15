const Person = ({ person, deletePerson }) => {
  const handleClick = () => {
    if (confirm(`Delete ${person.name}? `)) {
      deletePerson(person.id);
    }
  };

  return (
    <li>
      {person.name}: {person.number}
      <button onClick={handleClick}>delete</button>
    </li>
  );
};

const Persons = ({ persons, search, deletePerson }) => {
  const filter = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <ul>
      {filter.map((person) => (
        <Person key={person.name} person={person} deletePerson={deletePerson} />
      ))}
    </ul>
  );
};

export default Persons;
