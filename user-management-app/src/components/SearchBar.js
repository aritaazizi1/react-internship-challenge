import React from "react";
import { Input } from "antd";

const { Search } = Input;

function SearchBar({ onSearch }) {
  return (
    <>
      <Search
        placeholder="Search by name or email..."
        onChange={(e) => onSearch(e.target.value)}
        style={{ width: 250 }}
      />
    </>
  );
}

export default SearchBar;
