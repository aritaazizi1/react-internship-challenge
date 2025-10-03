import { React, useEffect, useState } from "react";
import { Table } from "antd";

const { Column } = Table;

function ListUsers() {
  const [users, setUsers] = useState([]);

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

  return (
    <>
      <Table
        dataSource={users}
        style={{ margin: 50, border: "1px solid #f5f5f5" }}
      >
        <Column
          title="Name"
          dataIndex="Name"
          render={(text, record) => <span>{record.name}</span>}
        />
        <Column
          title="E-mail"
          dataIndex="email"
          key="email"
          render={(text, record) => <span>{record.email}</span>}
        />
        <Column
          title="Company"
          dataIndex="company"
          key="company"
          render={(text, record) => <span>{record.company.name}</span>}
        />
      </Table>
    </>
  );
}

export default ListUsers;
