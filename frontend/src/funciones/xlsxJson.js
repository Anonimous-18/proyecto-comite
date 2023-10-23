import * as XLSX from 'xlsx';

export const handleFileUpload = (event) => {
  const file = event.target.files[0];
  let excelData = []; 
  if (file) {
    const nombreArchivo = file.name;
    // Divide el nombre del archivo en partes usando el punto como separador
    const partesNombre = nombreArchivo.split(".");
    // Obtiene la última parte que debería ser la extensión
    const ext = partesNombre.pop();
    console.log(ext);
    if (ext === "xlsx") {
      alert("existe un archivo excel");
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        excelData.push(XLSX.utils.sheet_to_json(firstSheet));
      };
      reader.readAsArrayBuffer(file);
    }else{
      alert("El archivo selecionado no es un xlsx")
    }
  }
  
  return excelData; 
  
}

export const excelNombre = (event) =>{
  const file = event.target.files[0];
  if (file) {
    const nombreArchivo = file.name;
    // Divide el nombre del archivo en partes usando el punto como separador
    const partesNombre = nombreArchivo.split(".");
    // Obtiene la última parte que debería ser la extensión
    const ext = partesNombre.pop()
    if (ext === "xlsx"){
      return nombreArchivo;
    } else {
      return null;
    }
  }
}