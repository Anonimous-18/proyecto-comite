import XLSX from 'xlsx';


const xlsxJson = ()=>{
    const excel = XLSX.readFile("/Users/teleinformatica/Desktop/Libro1.xlsx");

    let nombreHoja  = excel.SheetNames;
    let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
    console.log(datos);
}
xlsxJson()