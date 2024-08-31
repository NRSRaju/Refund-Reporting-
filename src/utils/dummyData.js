
export const getRefundReports = (startDate, endDate) => {
  // Convert dates to Date objects
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Expanded dummy data
  const allReports = [
    { date: '2024-08-01', product: 'Laptop', affiliate: 'John Doe', reason: 'Damaged Product', amount: 1000 },
    { date: '2024-08-02', product: 'T-Shirt', affiliate: 'Jane Smith', reason: 'Late Delivery', amount: 25 },
    { date: '2024-08-03', product: 'Coffee Maker', affiliate: 'Sam Wilson', reason: 'Other', amount: 50 },
    { date: '2024-08-04', product: 'Headphones', affiliate: 'Alice Brown', reason: 'Not as described', amount: 80 },
    { date: '2024-08-05', product: 'Smartphone', affiliate: 'Charlie Davis', reason: 'Defective', amount: 500 },
    { date: '2024-08-06', product: 'Tablet', affiliate: 'Emily Clark', reason: 'Changed mind', amount: 300 },
    { date: '2024-08-07', product: 'Smartwatch', affiliate: 'Michael Johnson', reason: 'Found better price', amount: 150 },
    { date: '2024-08-08', product: 'Bluetooth Speaker', affiliate: 'Sophia Lee', reason: 'Not as expected', amount: 120 },
    { date: '2024-08-09', product: 'Camera', affiliate: 'James Brown', reason: 'Defective', amount: 600 },
    { date: '2024-08-10', product: 'Monitor', affiliate: 'Olivia Martinez', reason: 'Other', amount: 200 },
    { date: '2024-08-11', product: 'Keyboard', affiliate: 'Lucas Wilson', reason: 'Not as described', amount: 40 },
    { date: '2024-08-12', product: 'Mouse', affiliate: 'Mia Taylor', reason: 'Late Delivery', amount: 30 },
    { date: '2024-08-13', product: 'Printer', affiliate: 'Ethan Anderson', reason: 'Changed mind', amount: 250 },
    { date: '2024-08-14', product: 'Router', affiliate: 'Isabella Thomas', reason: 'Found better price', amount: 75 },
    { date: '2024-08-15', product: 'External Hard Drive', affiliate: 'Aiden Scott', reason: 'Not as expected', amount: 180 },
    { date: '2024-08-16', product: 'Microphone', affiliate: 'Chloe White', reason: 'Defective', amount: 90 },
    { date: '2024-08-17', product: 'Webcam', affiliate: 'Mason Harris', reason: 'Other', amount: 70 },
  ];

  // Filter reports based on date range
  return allReports.filter(report => {
    const reportDate = new Date(report.date);
    return reportDate >= start && reportDate <= end;
  });
};

export const getRefundTrends = () => {
  return [
    { name: 'Jan', totalRefunds: 20, totalValue: 1500, percentageOfSales: 5 },
    { name: 'Feb', totalRefunds: 25, totalValue: 2000, percentageOfSales: 6 },
    { name: 'Mar', totalRefunds: 30, totalValue: 2500, percentageOfSales: 7 },
    { name: 'Apr', totalRefunds: 22, totalValue: 1800, percentageOfSales: 5.5 },
    { name: 'May', totalRefunds: 28, totalValue: 2200, percentageOfSales: 6.5 },
    { name: 'Jun', totalRefunds: 35, totalValue: 3000, percentageOfSales: 8 },
  ];
};

export const getAffiliatePerformance = () => {
  return [
    { name: 'John Doe', totalSales: 10000, refunds: 500, netEarnings: 9500, impactOnEarnings: -5 },
    { name: 'Jane Smith', totalSales: 15000, refunds: 750, netEarnings: 14250, impactOnEarnings: -5 },
    { name: 'Bob Johnson', totalSales: 8000, refunds: 400, netEarnings: 7600, impactOnEarnings: -5 },
    { name: 'Alice Brown', totalSales: 12000, refunds: 600, netEarnings: 11400, impactOnEarnings: -5 },
    { name: 'Charlie Davis', totalSales: 20000, refunds: 1000, netEarnings: 19000, impactOnEarnings: -5 },
  ];
};

export const getRefundAnalytics = (filterType) => {
  switch (filterType) {
    case 'category':
      return [
        { name: 'Electronics', value: 400 },
        { name: 'Clothing', value: 300 },
        { name: 'Books', value: 200 },
        { name: 'Home & Garden', value: 100 },
      ];
    case 'occupation':
      return [
        { name: 'Blogger', value: 500 },
        { name: 'YouTuber', value: 300 },
        { name: 'Social Media Influencer', value: 200 },
      ];
    case 'reason':
      return [
        { name: 'Not as described', value: 400 },
        { name: 'Defective', value: 300 },
        { name: 'Changed mind', value: 200 },
        { name: 'Found better price', value: 100 },
      ];
    default:
      return [];
  }
};