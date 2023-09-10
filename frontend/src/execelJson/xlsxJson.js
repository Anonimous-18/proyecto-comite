import * as XLSX from 'xlsx';

export const handleFileUpload = (event)=>{
    const file = event.target.files[0];
    if (file) {
        alert("existe un archivo excel")
        const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Trabajar con el archivo Excel en la variable 'workbook'
        // Por ejemplo, puedes acceder a la primera hoja de cálculo
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        // const excelData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
        const excelData = XLSX.utils.sheet_to_json(firstSheet);

        console.log(excelData);
      };


      reader.readAsArrayBuffer(file);
    }
}