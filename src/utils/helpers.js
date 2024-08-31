
// src/utils/helpers.js
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

export const downloadPDF = (data, filename) => {
  const doc = new jsPDF();
  doc.text('Refund Report', 14, 15);
  doc.autoTable({
    head: [['Date', 'Product', 'Affiliate', 'Reason', 'Amount']],
    body: data.map(item => [item.date, item.product, item.affiliate, item.reason, `$${item.amount.toFixed(2)}`]),
  });
  doc.save(`${filename}.pdf`);
};

export const downloadExcel = (data, filename) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Refunds');
  XLSX.writeFile(workbook, `${filename}.xlsx`);
};