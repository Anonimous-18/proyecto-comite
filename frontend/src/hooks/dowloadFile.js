export const dowloadFile = (response, nombreArchivo) => {
  const url = window.URL.createObjectURL(new Blob([response]));
  const link = document.createElement("a");

  link.href = url;
  link.setAttribute("download", nombreArchivo);

  document.body.appendChild(link);

  link.click();
  link.remove();
};
