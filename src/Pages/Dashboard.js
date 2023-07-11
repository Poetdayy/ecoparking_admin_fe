import {
  DollarCircleOutlined,
  CarFilled,
  BookOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../Api";
import DashboardCard from "../Components/Helper/DashboardCard";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {

  return (
    <Space size={10} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal" style={{display:"flex", justifyContent:"evenly"}}>
        <DashboardCard
          icon={
            <CarFilled
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Parkings"}
          value='7'
        />
        <DashboardCard
          icon={
            <BookOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Tickets"}
          value="11"
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Customer"}
          value='3'
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Revenue"}
          value="600.000 vnd"
        />
      </Space>
      <Space>
        <RecentOrders />
        <DashboardChart />
      </Space>
    </Space>
  );
}

function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   getOrders().then((res) => {
  //     setDataSource(res.products.splice(0, 3));
  //     setLoading(false);
  //   });
  // }, []);

  const data = [
    {
      parking: "Bãi gửi xe C1",
      tickets: "5",
      revenue: "300.000"
    },
    {
      parking: "Bãi đỗ xe B1	",
      tickets: "4",
      revenue: "200.000"
    },
    {
      parking: "Bãi đỗ xe bệnh viện bạch mai hà nội",
      tickets: "2",
      revenue: "100.000"
    },
  ]

  return (
    <>
      <Typography.Text>Greatest Revenue Parking</Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "parking",
          },
          {
            title: "Tickets",
            dataIndex: "tickets",
          },
          {
            title: "Revenue",
            dataIndex: "revenue",
          },
        ]}
        loading={loading}
        dataSource={data}
        pagination={false}
      ></Table>
    </>
  );
}

function DashboardChart() {
  const [reveneuData, setReveneuData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };

      setReveneuData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={reveneuData} />
    </Card>
  );
}
export default Dashboard;
