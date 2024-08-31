
// src/components/RefundAnalytics.js
import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, Select } from '../styles/StyledComponents';
import { getRefundAnalytics } from '../utils/dummyData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RefundAnalytics = () => {
  const [filterType, setFilterType] = useState('category');
  const data = getRefundAnalytics(filterType);

  return (
    <Card>
      <h2>Refund Analytics</h2>
      <Select onChange={(e) => setFilterType(e.target.value)}>
        <option value="category">Product Category</option>
        <option value="occupation">Affiliate Occupation</option>
        <option value="reason">Refund Reason</option>
      </Select>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default RefundAnalytics;
