import { useState } from "react";
import "./App.css";

const addGuestComponent = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const addGuest = () => {
    setName("");
    setGuests([...guests, name]);
  };

  return (
    <>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={addGuest}>Add Guest</button>
      </div>

      <div>
        <h2>Guest List</h2>
        {guests.map((guest) => {
          return <li key={guest}>{guest}</li>;
        })}
      </div>
    </>
  );
};

type FilteredUser = {
  id: number;
  name: string;
};

function App() {
  const [keyword, setKeyword] = useState("");
  const [filteredUser, setFilteredUser] = useState<FilteredUser | undefined>();

  const users = [
    { id: 1, name: "Yohanes" },
    { id: 2, name: "Ray" },
    { id: 3, name: "Febriyanto" },
    { id: 4, name: "Silitonga" },
  ];

  const searchUser = () => {
    const searchResult = users.find((user) => user.name == keyword);
    setFilteredUser(searchResult);
  };

  return (
    <div className="App">
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <button onClick={searchUser}>Search User</button>
      <div>
        {filteredUser && filteredUser.name} {filteredUser?.id}
      </div>
    </div>
  );
}

export default App;
