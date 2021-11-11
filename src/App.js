import React from "react";
import Search from "./components/Search";
import "./styles.css";

export default function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [users, setUsers] = React.useState([
    "kieran",
    "alan",
    "ryan",
    "nigel",
    "geraint",
    "garin"
  ]);

  console.log(`1: ${searchValue}`);

  let tmpArray = [];
  tmpArray = users.filter((user) => user === searchValue);

  console.log(tmpArray);

  return (
    <div className="App">
      <h1>Users List</h1>
      <h2>Search for your favourite user!</h2>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {console.log(`2:${searchValue}`)}

      {searchValue === ""
        ? users.map((user) => <p>{user}</p>)
        : tmpArray.map((user) => <p>{user}</p>)}
    </div>
  );
}
