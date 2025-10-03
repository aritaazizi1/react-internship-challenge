import { useState, useEffect } from "react";
import ListUsers from "../../components/ListUsers";
import SearchBar from "../../components/SearchBar";
import Navbar from "../../components/Navbar";

function Home() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <SearchBar onSearch={setSearchTerm} />
      <ListUsers users={filteredUsers} />
    </div>
  );
}

export default Home;
