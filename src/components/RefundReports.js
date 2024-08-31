
// // // // src/components/RefundReports.js
// // // import React, { useState } from 'react';
// // // import { FaFilePdf, FaFileExcel } from 'react-icons/fa';
// // // import { Card, Table, Button, DateRangePicker, DownloadButton } from '../styles/StyledComponents';
// // // import { getRefundReports } from '../utils/dummyData';
// // // import { downloadPDF, downloadExcel } from '../utils/helpers';

// // // const RefundReports = () => {
// // //   const [dateRange, setDateRange] = useState({ start: null, end: null });
// // //   const [reports, setReports] = useState([]);

// // //   const handleGenerateReport = () => {
// // //     const data = getRefundReports(dateRange.start, dateRange.end);
// // //     setReports(data);
// // //   };

// // //   return (
// // //     <Card>
// // //       <h2>Refund Reports</h2>
// // //       <DateRangePicker
// // //         value={dateRange.start}
// // //         onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
// // //       />
// // //       <DateRangePicker
// // //         value={dateRange.end}
// // //         onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
// // //       />
// // //       <Button onClick={handleGenerateReport}>Generate Report</Button>
// // //       {reports.length > 0 && (
// // //         <>
// // //           <Table>
// // //             <thead>
// // //               <tr>
// // //                 <th>Date</th>
// // //                 <th>Product</th>
// // //                 <th>Affiliate</th>
// // //                 <th>Reason</th>
// // //                 <th>Amount</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {reports.map((report, index) => (
// // //                 <tr key={index}>
// // //                   <td>{report.date}</td>
// // //                   <td>{report.product}</td>
// // //                   <td>{report.affiliate}</td>
// // //                   <td>{report.reason}</td>
// // //                   <td>${report.amount.toFixed(2)}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </Table>
// // //           <DownloadButton onClick={() => downloadPDF(reports, 'Refund_Report')}>
// // //             <FaFilePdf /> Download PDF
// // //           </DownloadButton>
// // //           <DownloadButton onClick={() => downloadExcel(reports, 'Refund_Report')}>
// // //             <FaFileExcel /> Download Excel
// // //           </DownloadButton>
// // //         </>
// // //       )}
// // //     </Card>
// // //   );
// // // };

// // // export default RefundReports;
// // import React, { useState } from 'react';
// // import { FaFilePdf, FaFileExcel } from 'react-icons/fa';
// // import { Card, Table, Button, DateRangePicker, DownloadButton } from '../styles/StyledComponents';
// // import { getRefundReports } from '../utils/dummyData';
// // import { downloadPDF, downloadExcel } from '../utils/helpers';

// // const RefundReports = () => {
// //   const [dateRange, setDateRange] = useState({ start: '', end: '' });
// //   const [reports, setReports] = useState([]);

// //   const handleGenerateReport = () => {
// //     if (!dateRange.start || !dateRange.end) {
// //       // Handle case where dates are not selected
// //       alert('Please select both start and end dates.');
// //       return;
// //     }
// //     const data = getRefundReports(dateRange.start, dateRange.end);
// //     setReports(data);
// //   };

// //   return (
// //     <Card>
// //       <h2>Refund Reports</h2>
// //       <DateRangePicker
// //         type="date"
// //         value={dateRange.start}
// //         onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
// //         placeholder="Start Date"
// //       />
// //       <DateRangePicker
// //         type="date"
// //         value={dateRange.end}
// //         onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
// //         placeholder="End Date"
// //       />
// //       <Button onClick={handleGenerateReport}>Generate Report</Button>
// //       {reports.length > 0 && (
// //         <>
// //           <Table>
// //             <thead>
// //               <tr>
// //                 <th>Date</th>
// //                 <th>Product</th>
// //                 <th>Affiliate</th>
// //                 <th>Reason</th>
// //                 <th>Amount</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {reports.map((report, index) => (
// //                 <tr key={index}>
// //                   <td>{report.date}</td>
// //                   <td>{report.product}</td>
// //                   <td>{report.affiliate}</td>
// //                   <td>{report.reason}</td>
// //                   <td>${report.amount.toFixed(2)}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </Table>
// //           <DownloadButton onClick={() => downloadPDF(reports, 'Refund_Report')}>
// //             <FaFilePdf /> Download PDF
// //           </DownloadButton>
// //           <DownloadButton onClick={() => downloadExcel(reports, 'Refund_Report')}>
// //             <FaFileExcel /> Download Excel
// //           </DownloadButton>
// //         </>
// //       )}
// //     </Card>
// //   );
// // };

// // export default RefundReports;
// import React, { useState } from 'react';
// import { FaFilePdf, FaFileExcel } from 'react-icons/fa';
// import { Card, Table, Button, DateRangePicker, DownloadButton, TableContainer } from '../styles/StyledComponents';
// import { getRefundReports } from '../utils/dummyData';
// import { downloadPDF, downloadExcel } from '../utils/helpers';

// const RefundReports = () => {
//   const [dateRange, setDateRange] = useState({ start: '', end: '' });
//   const [reports, setReports] = useState([]);

//   const handleGenerateReport = () => {
//     if (!dateRange.start || !dateRange.end) {
//       // Handle case where dates are not selected
//       alert('Please select both start and end dates.');
//       return;
//     }
//     const data = getRefundReports(dateRange.start, dateRange.end);
//     setReports(data);
//   };

//   return (
//     <Card>
//       <h2>Refund Reports</h2>
//       <DateRangePicker
//         value={dateRange.start}
//         onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
//         placeholder="Start Date"
//       />
//       <DateRangePicker
//         value={dateRange.end}
//         onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
//         placeholder="End Date"
//       />
//       <Button onClick={handleGenerateReport}>Generate Report</Button>
//       {reports.length > 0 && (
//         <>
//           <TableContainer>
//             <Table>
//               <thead>
//                 <tr>
//                   <th>Date</th>
//                   <th>Product</th>
//                   <th>Affiliate</th>
//                   <th>Reason</th>
//                   <th>Amount</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {reports.map((report, index) => (
//                   <tr key={index}>
//                     <td>{report.date}</td>
//                     <td>{report.product}</td>
//                     <td>{report.affiliate}</td>
//                     <td>{report.reason}</td>
//                     <td>${report.amount.toFixed(2)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </TableContainer>
//           <DownloadButton onClick={() => downloadPDF(reports, 'Refund_Report')}>
//             <FaFilePdf /> Download PDF
//           </DownloadButton>
//           <DownloadButton onClick={() => downloadExcel(reports, 'Refund_Report')}>
//             <FaFileExcel /> Download Excel
//           </DownloadButton>
//         </>
//       )}
//     </Card>
//   );
// };

// export default RefundReports;
import React, { useState, useEffect } from 'react';
import { FaFilePdf, FaFileExcel } from 'react-icons/fa';
import { Card, Table, Button, DateRangePicker, DownloadButton, TableContainer } from '../styles/StyledComponents';
import { getRefundReports } from '../utils/dummyData';
import { downloadPDF, downloadExcel } from '../utils/helpers';

const RefundReports = () => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [allReports, setAllReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);

  useEffect(() => {
    // Fetch all reports initially
    setAllReports(getRefundReports('1900-01-01', '9999-12-31')); // Example of fetching all data
    setFilteredReports(getRefundReports('1900-01-01', '9999-12-31')); // Initialize filtered reports with all data
  }, []);

  const handleGenerateReport = () => {
    if (!dateRange.start || !dateRange.end) {
      // Handle case where dates are not selected
      alert('Please select both start and end dates.');
      return;
    }
    const data = getRefundReports(dateRange.start, dateRange.end);
    setFilteredReports(data);
  };

  return (
    <Card>
      <h2>Refund Reports</h2>
      <DateRangePicker
        value={dateRange.start}
        onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
        placeholder="Start Date"
      />
      <DateRangePicker
        value={dateRange.end}
        onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
        placeholder="End Date"
      />
      <Button onClick={handleGenerateReport}>Generate Report</Button>
      {filteredReports.length > 0 && (
        <>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Product</th>
                  <th>Affiliate</th>
                  <th>Reason</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.map((report, index) => (
                  <tr key={index}>
                    <td>{report.date}</td>
                    <td>{report.product}</td>
                    <td>{report.affiliate}</td>
                    <td>{report.reason}</td>
                    <td>${report.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableContainer>
          <DownloadButton onClick={() => downloadPDF(filteredReports, 'Refund_Report')}>
            <FaFilePdf /> Download PDF
          </DownloadButton>
          <DownloadButton onClick={() => downloadExcel(filteredReports, 'Refund_Report')}>
            <FaFileExcel /> Download Excel
          </DownloadButton>
        </>
      )}
    </Card>
  );
};

export default RefundReports;
