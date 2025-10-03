import { useState, useEffect } from "react";
import ListUsers from "../../components/ListUsers";
import SearchBar from "../../components/SearchBar";
import Navbar from "../../components/Navbar";
import styles from "./Home.module.css";
import AddUsers from "../../components/AddUsers";

function Home() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
          localStorage.setItem("users", JSON.stringify(data));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addUser = (newUser) => {
    const id = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
    const userToAdd = {
      id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      website: newUser.website,
      company: { name: newUser.company },
    };
    const updatedUsers = [userToAdd, ...users];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.topBar}>
          <SearchBar onSearch={setSearchTerm} />
          <AddUsers onAddUser={addUser} />
        </div>
        <ListUsers users={filteredUsers} />
      </div>
    </div>
  );
}

export default Home;
