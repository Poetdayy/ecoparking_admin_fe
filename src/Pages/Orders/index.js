import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import ticketApi from "../../Api/ticketsApi";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchTicketsList = async () => {
      setLoading(true);

      try {
        const response = await ticketApi.getAll();

        setDataSource(response);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        console.log(`Failed to fetch tickets list`, error);
      }
    } 

    fetchTicketsList();
  }, []);

  console.log(dataSource);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Revenue</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Parking",
            dataIndex: "title",
            
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "carNumber",
            dataIndex: "carNumber",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}

export default Orders;
