import { Avatar, Space, Table, Typography, Button } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../Api";
import customerApi from "../Api/customerApi";
import SearchInput from "../Components/Helper/SearchInput";

const commonColumns = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    render: (avatar) => <Avatar src={avatar} />,
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
  },
  {
    title: 'Phone',
    dataIndex: 'phoneNumber',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const tableColumns = {
  0: commonColumns,
  1: commonColumns,
  2: commonColumns,
};


function UsersPage() {
  const [role, setRole] = useState(0);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchUsersList = async () => {
      setLoading(true);

      try {
        const response = await customerApi.getUserThoughtRole(role);
        setDataSource(response);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        console.log(`Failed to fetch users list`, error);
      }
    }
  
    fetchUsersList();
  }, [role]);

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <>
      <Typography.Title level={4}>UsersPage</Typography.Title>
      <SearchInput></SearchInput>
      <Space wrap>
        <Button key="admin" type={role === 0 ? "primary" : "default"} onClick={() => handleRoleChange(0)}>Admin</Button>
        <Button key="parkingOwner" type={role === 1 ? "primary" : "default"} onClick={() => handleRoleChange(1)}>ParkingsOwner</Button>
        <Button key="customer" type={role === 2 ? "primary" : "default"} onClick={() => handleRoleChange(2)}>UsersPage</Button>
      </Space>
      {role in tableColumns ? (
        <Table
          loading={loading}
          columns={tableColumns[role]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        />
      ) : null}
    </>
  );
};

export default UsersPage;
