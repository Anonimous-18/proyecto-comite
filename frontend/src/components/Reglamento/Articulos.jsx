export const Articulos = ({ articulos }) => {
  return (
    <ul>
      {articulos.map((articulo, index) => (
        <li key={index}>
          <h1>
            Articulo <strong>{articulo.art_id}</strong>
            <p>{articulo.art_titulo}</p>
          </h1>
          <p>{articulo.art_descripcion}</p>
          <div>
            <h2>
              {articulo.par_id ? (
                <>
                  Paragrafo <strong>{articulo.par_id}</strong>
                </>
              ) : (
                <></>
              )}
            </h2>
            <p>{articulo.par_descripcion}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
