import { Table } from "antd";

const { Column } = Table;

function ListUsers({ users }) {
  return (
    <>
      <Table
        dataSource={users}
        rowKey="id"
        style={{ margin: 50, border: "1px solid #f5f5f5" }}
      >
        <Column
          title="Name"
          dataIndex="name"
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
