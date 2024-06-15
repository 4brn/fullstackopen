const InputField = ({ type, handler, value }) => (
  <div>
    {type}:
    <input value={value} placeholder={`Enter ${type}...`} onChange={handler} />
  </div>
);

const PersonForm = ({ name, number, handleName, handleNumber, addPerson }) => {
  return (
    <form onSubmit={addPerson}>
      <InputField type="name" handler={handleName} value={name} />
      <InputField type="number" handler={handleNumber} value={number} />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
