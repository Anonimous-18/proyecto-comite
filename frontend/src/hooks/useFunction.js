const useDecodedToken = (token) => {
  if (token) {
    /**---------------------------------
     * Obtenemos el payload del token
     * ---------------------------------*/
    const payloadBase64 = token.split(".")[1];

    /**------------------------------------
     * Decodificamos sin obtener la firma
     * -----------------------------------*/
    const payloadJson = atob(payloadBase64);

    const payload = JSON.parse(payloadJson);

    return payload;
  } else {
    return null;
  }
};

export default { useDecodedToken };
