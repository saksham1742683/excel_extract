import * as XLSX from "xlsx";

export function parseExcel(file, callback) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const data = e.target.result;
    const workbook = XLSX.read(data, { type: "binary" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet);
    callback(jsonData);
  };
  reader.readAsBinaryString(file);
}
