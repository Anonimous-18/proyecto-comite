import * as XLSX from 'xlsx';

export const handleFileUpload = (event) => {
<<<<<<< HEAD
  console.log(event);
  let excelData = null;
=======
>>>>>>> 7adfa1f4271ed595f9992cc8267eb4f89c2722b8
  const file = event.target.files[0];
  const excelData = []; 
  if (file) {
    alert("existe un archivo excel");
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      excelData.push(XLSX.utils.sheet_to_json(firstSheet));
    };
<<<<<<< HEAD
    
=======
>>>>>>> 7adfa1f4271ed595f9992cc8267eb4f89c2722b8
    reader.readAsArrayBuffer(file);
  }
  console.log(excelData);
  return excelData; 
};