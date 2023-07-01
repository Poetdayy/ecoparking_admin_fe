import React from 'react';
import PropTypes from 'prop-types';
import { Card, Space, Statistic } from "antd";

const DashboardCard = ({title, value, icon}) => {
  return (
          <Card className='width:"50px'>
            <Space direction="horizontal">
              {icon}
              <Statistic title={title} value={value} />
            </Space>
          </Card>
        );
}

DashboardCard.propTypes = {}

export default DashboardCard