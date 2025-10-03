import React from "react";
import { Input } from "antd";

const { Search } = Input;

function SearchBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        margin: "25px 50px 0 0",
      }}
    >
      <Search placeholder="Search by name or email" style={{ width: 250 }} />
    </div>
  );
}

export default SearchBar;
