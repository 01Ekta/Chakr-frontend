const PeoplePage = () => {
    const people = [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Smith" }];
    return (
      <div>
        <h1>People</h1>
        <ul>
          {people.map(person => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PeoplePage;
