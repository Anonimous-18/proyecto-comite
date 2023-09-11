import * as XLSX from 'xlsx';

export const handleFileUpload = (event) => {
  console.log(event);
  let excelData = null;
  const file = event.target.files[0];
  if (file) {
    alert("existe un archivo excel");
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      excelData = XLSX.utils.sheet_to_json(firstSheet);
    };
    
    reader.readAsArrayBuffer(file);
  }
  console.log(excelData);
  return excelData; 
};