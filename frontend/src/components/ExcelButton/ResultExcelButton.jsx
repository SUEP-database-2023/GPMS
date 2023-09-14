import * as XLSX from "xlsx";
import React from "react";

function exportToExcel(data, fileName) {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, fileName);
}

function ResultExcelButton({ data }) {
  const handleExportClick = () => {
    exportToExcel(data, "exported_data.xlsx");
  };

  return <button onClick={handleExportClick}>Download Excel</button>;
}

export default ResultExcelButton;
