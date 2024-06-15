import { useState, useEffect } from "react";
import requests from "./services/phonebook";

import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    requests.getAll().then((fetchedPersons) => setPersons(fetchedPersons));
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const personExist = persons.find((p) => p.name === newPerson.name);
    console.log(personExist);
    if (personExist !== undefined) {
      const message = `${newPerson.name} is already added to phonebook, replace the number with a new one?`;
      if (confirm(message)) {
        requests
          .update(personExist.id, newPerson)
          .then((updatedPerson) =>
            setPersons(
              persons.map((p) =>
                p.id !== updatedPerson.id ? p : updatedPerson,
              ),
            ),
          );
      }
    } else {
      requests
        .create(newPerson)
        .then((responsePerson) => setPersons(persons.concat(responsePerson)));
    }

    setNewNumber("");
    setNewName("");
  };

  const deletePerson = (id) => {
    requests.deletePerson(id).then((response) => {
      const filtered = persons.filter((person) => person.id !== response.id);
      setPersons(filtered);
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setSearch={setSearch} />
      <h2>Add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        handleNumber={handleNumberChange}
        handleName={handleNameChange}
        addPerson={addPerson}
      />
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      {persons.length ? (
        <Persons
          persons={persons}
          search={search}
          deletePerson={deletePerson}
        />
      ) : (
        "..."
      )}
    </div>
  );
};
export default App;
