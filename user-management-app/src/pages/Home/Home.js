import React from "react";
import ListUsers from "../../components/ListUsers";
import SearchBar from "../../components/SearchBar";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <ListUsers />
    </div>
  );
}

export default Home;
