// import XLSX from 'xlsx';
import { handleFileUpload } from "../../execelJson/xlsxJson";

const Prueba = () => {
  return (
    <div>
      <input type="file" accept=".xlsx" onChange={handleFileUpload} />
    </div>
  );
};

export default Prueba;
