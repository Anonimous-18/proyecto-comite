const customCharset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const bitsPerGroup = 6;

export function encodeCustomBase64String(text) {
  let binaryString = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    // Convierte el valor del carácter en una representación binaria de 16 bits.
    const binaryValue = charCode.toString(2).padStart(16, '0');
    binaryString += binaryValue;
  }

  let encoded = '';
  for (let i = 0; i < binaryString.length; i += bitsPerGroup) {
    let chunk = binaryString.slice(i, i + bitsPerGroup);
    while (chunk.length < bitsPerGroup) {
      chunk += '0'; // Añadir bits de relleno si es necesario
    }
    const decimalValue = parseInt(chunk, 2);
    encoded += customCharset[decimalValue];
  }

  return encoded;
}

export function decodeCustomBase64String(encodedText) {
  let decoded = '';
  for (let i = 0; i < encodedText.length; i++) {
    const char = encodedText[i];
    const decimalValue = customCharset.indexOf(char);
    const binaryValue = decimalValue.toString(2).padStart(bitsPerGroup, '0');
    decoded += binaryValue;
  }

  let text = '';
  for (let i = 0; i < decoded.length; i += 16) {
    const binaryValue = decoded.slice(i, i + 16);
    const charCode = parseInt(binaryValue, 2);
    text += String.fromCharCode(charCode);
  }

  return text;
}
