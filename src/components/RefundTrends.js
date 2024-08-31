
// src/components/RefundTrends.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from '../styles/StyledComponents';
import { getRefundTrends } from '../utils/dummyData';

const RefundTrends = () => {
  const data = getRefundTrends();

  return (
    <Card>
      <h2>Refund Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalRefunds" fill="#8884d8" />
          <Bar dataKey="totalValue" fill="#82ca9d" />
          <Bar dataKey="percentageOfSales" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default RefundTrends;