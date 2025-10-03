import { Table } from "antd";
import { useNavigate } from "react-router-dom";

const { Column } = Table;

function ListUsers({ users }) {
  const navigate = useNavigate();
  return (
    <>
      <Table
        dataSource={users}
        rowKey="id"
        style={{ margin: 50, border: "1px solid #f5f5f5" }}
        onRow={(record) => ({
          onClick: () => navigate(`/users/${record.id}`),
          style: { cursor: "pointer" },
        })}
      >
        <Column
          title="Name"
          dataIndex="name"
          render={(text, record) => <span>{record.name}</span>}
        />
        <Column
          title="E-mail"
          dataIndex="email"
          render={(text, record) => <span>{record.email}</span>}
        />
        <Column
          title="Company"
          dataIndex="company"
          render={(text, record) => <span>{record.company?.name}</span>}
        />
      </Table>
    </>
  );
}

export default ListUsers;
