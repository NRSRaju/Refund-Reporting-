
// // // // src/styles/StyledComponents.js
// // // import styled from 'styled-components';

// // // export const Grid = styled.div`
// // //   display: grid;
// // //   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
// // //   gap: 1rem;
// // //   margin-bottom: 1rem;
// // // `;

// // // export const Card = styled.div`
// // //   background-color: #fff;
// // //   border-radius: 5px;
// // //   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
// // //   padding: 1rem;
// // // `;

// // // export const Table = styled.table`
// // //   width: 100%;
// // //   border-collapse: collapse;
// // //   margin-bottom: 1rem;

// // //   th, td {
// // //     border: 1px solid #ddd;
// // //     padding: 8px;
// // //     text-align: left;
// // //   }

// // //   th {
// // //     background-color: #f2f2f2;
// // //   }

// // //   @media (max-width: 600px) {
// // //     font-size: 14px;
// // //   }
// // // `;

// // // export const Button = styled.button`
// // //   background-color: #4CAF50;
// // //   border: none;
// // //   color: white;
// // //   padding: 10px 20px;
// // //   text-align: center;
// // //   text-decoration: none;
// // //   display: inline-block;
// // //   font-size: 16px;
// // //   margin: 4px 2px;
// // //   cursor: pointer;
// // //   border-radius: 5px;
// // //   transition: background-color 0.3s;

// // //   &:hover {
// // //     background-color: #45a049;
// // //   }

// // //   @media (max-width: 600px) {
// // //     font-size: 14px;
// // //     padding: 8px 16px;
// // //   }
// // // `;

// // // export const DateRangePicker = styled.input.attrs({ type: 'date' })`
// // //   margin-right: 10px;
// // //   padding: 8px;
// // //   border: 1px solid #ddd;
// // //   border-radius: 5px;
// // // `;

// // // export const DownloadButton = styled(Button)`
// // //   background-color: #008CBA;

// // //   &:hover {
// // //     background-color: #007A99;
// // //   }
// // // `;

// // // export const Select = styled.select`
// // //   font-size: 16px;
// // //   padding: 8px;
// // //   margin-bottom: 10px;
// // //   border: 1px solid #ddd;
// // //   border-radius: 5px;

// // //   @media (max-width: 600px) {
// // //     font-size: 14px;
// // //   }
// // // `;

// // // src/styles/StyledComponents.js
// // import styled from 'styled-components';

// // export const Grid = styled.div`
// //   display: grid;
// //   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
// //   gap: 20px;
// // `;

// // export const Card = styled.div`
// //   background: white;
// //   border-radius: 8px;
// //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// //   padding: 20px;
// //   transition: all 0.3s ease;

// //   &:hover {
// //     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
// //   }
// // `;

// // export const Table = styled.table`
// //   width: 100%;
// //   border-collapse: collapse;
// //   margin-top: 20px;
  
// //   th, td {
// //     border: 1px solid #ddd;
// //     padding: 12px;
// //     text-align: left;
// //   }

// //   th {
// //     background-color: #f2f2f2;
// //     font-weight: bold;
// //   }

// //   tr:nth-child(even) {
// //     background-color: #f8f8f8;
// //   }

// //   tr:hover {
// //     background-color: #e8e8e8;
// //   }
// // `;

// // export const Button = styled.button`
// //   background-color: #4CAF50;
// //   border: none;
// //   color: white;
// //   padding: 10px 20px;
// //   text-align: center;
// //   text-decoration: none;
// //   display: inline-block;
// //   font-size: 16px;
// //   margin: 4px 2px;
// //   cursor: pointer;
// //   border-radius: 4px;
// //   transition: background-color 0.3s ease;

// //   &:hover {
// //     background-color: #45a049;
// //   }
// // `;

// // export const Select = styled.select`
// //   width: 100%;
// //   padding: 10px;
// //   margin-bottom: 20px;
// //   border-radius: 4px;
// //   border: 1px solid #ddd;
// //   font-size: 16px;
// // `;

// // export const DateRangePicker = styled.input.attrs({ type: 'date' })`
// //   padding: 10px;
// //   margin-right: 10px;
// //   border-radius: 4px;
// //   border: 1px solid #ddd;
// //   font-size: 16px;
// // `;

// // export const DownloadButton = styled(Button)`
// //   background-color: #008CBA;
// //   margin-right: 10px;

// //   &:hover {
// //     background-color: #007a9e;
// //   }
// // `;

// // export const ChartContainer = styled.div`
// //   width: 100%;
// //   height: 300px;
// //   margin-top: 20px;
// // `;
// import styled from 'styled-components';

// export const Card = styled.div`
//   background: #ffffff;
//   padding: 20px;
//   margin-bottom: 20px;
//   border-radius: 8px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
// `;

// export const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   th, td {
//     padding: 12px;
//     text-align: left;
//     border-bottom: 1px solid #ddd;
//   }
//   th {
//     background-color: #f8f8f8;
//     color: #333;
//   }
//   tr:hover {
//     background-color: #f1f1f1;
//   }
// `;

// export const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// export const DownloadButton = styled(Button)`
//   margin-top: 10px;
//   display: inline-flex;
//   margin-right:15px;
//   align-items: center;
//   svg {
//     margin-right: 5px;
//   }
// `;

// export const Select = styled.select`
//   padding: 10px;
//   margin-bottom: 20px;
//   border-radius: 5px;
//   border: 1px solid #ddd;
//   width: 100%;
//   max-width: 300px;
// `;

// export const DateRangePicker = styled.input.attrs({ type: 'date' })`
//   padding: 10px;
//   margin-bottom: 10px;
//   border-radius: 5px;
//   border: 1px solid #ddd;
//   width: 100%;
//   max-width: 300px;
// `;

// export const Grid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 20px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;
import styled from 'styled-components';

export const Card = styled.div`
  background: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const TableContainer = styled.div`
  max-height: 300px; /* Adjust as needed */
  overflow-y: auto; /* Enables vertical scrolling */
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #f8f8f8;
    color: #333;
  }
  tr:hover {
    background-color: #f1f1f1;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const DownloadButton = styled(Button)`
  margin-top: 10px;
  display: inline-flex;
  margin-right: 15px;
  align-items: center;
  svg {
    margin-right: 5px;
  }
`;

export const Select = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 100%;
  max-width: 300px;
`;

export const DateRangePicker = styled.input.attrs({ type: 'date' })`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 100%;
  max-width: 300px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
