export const Articulos = ({ articulos }) => {
  return (
    <ul>
      {articulos.map((articulo, index) => (
        <li key={index}>
          <div className="text-base font-bold text-blue-800 italic font-serif flex-1">
            <h1>
              Articulo <strong>{articulo.art_id}</strong>
              <p className=" underline decoration-double text-sm">{articulo.art_titulo}</p>
            </h1>
          </div>

          <p className=" text-sm">{articulo.art_descripcion}</p>
          <div className=" text-sm">
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
          <br />
        </li>
      ))}
    </ul>
  );
};
