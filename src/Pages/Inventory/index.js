import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import parkingApi from "../../Api/parkingApi";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchParkingsList = async () => {
      setLoading(true);

      try {
        const response = await parkingApi.getAll();
        setDataSource(response);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        console.log(`Failed to fetch parkings list`, error);
      }
    } 

    fetchParkingsList();
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Parkings</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Image",
            dataIndex: "image",
            key: "Image",
            render: (image) =>  <Avatar src={image}></Avatar>
          },
          {
            title:"Name",
            dataIndex: "name",
            key:"Name"
          },
          {
            title: "Address",
            dataIndex: "address",
            key: "Address"
          },
          {
            title: "Park Type",
            dataIndex: "parkType",
            key: "ParkType",
            render: (parkType) => <Typography>{ parkType === 0 ? "Planned Parking" : "Spantaneous Parking" }</Typography>
          },  
          {
            title: "Quantity",
            dataIndex: "quantity",
            key: "Quantity"
          },
          {
            title: "Avaiable Slots",
            dataIndex: "available",
            key: "AvaiableSlots"
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
export default Inventory;
