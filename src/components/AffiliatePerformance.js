
// src/components/AffiliatePerformance.js
import React from 'react';
import { Card, Table } from '../styles/StyledComponents';
import { getAffiliatePerformance } from '../utils/dummyData';

const AffiliatePerformance = () => {
  const data = getAffiliatePerformance();

  return (
    <Card>
      <h2>Affiliate Performance</h2>
      <Table>
        <thead>
          <tr>
            <th>Affiliate</th>
            <th>Total Sales</th>
            <th>Refunds</th>
            <th>Net Earnings</th>
            <th>Impact on Earnings</th>
          </tr>
        </thead>
        <tbody>
          {data.map((affiliate, index) => (
            <tr key={index}>
              <td>{affiliate.name}</td>
              <td>${affiliate.totalSales.toFixed(2)}</td>
              <td>${affiliate.refunds.toFixed(2)}</td>
              <td>${affiliate.netEarnings.toFixed(2)}</td>
              <td>{affiliate.impactOnEarnings.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default AffiliatePerformance;
