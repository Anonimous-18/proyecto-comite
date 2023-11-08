import DefaultLayout from "../../Layout/DefaultLayout";

export const CitacionAprendiz = () => {
  return (
    <DefaultLayout>
      <div className="   w-full h-full mt-10  border-8 border-blue-600">
        <div className=" w-full h-full ">
          <form>
            <div 
              className="w-full  h-28 bg-purple-500  border-2 flex-row items-center justify-center  grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
               
              <div className=" bg-blue-800  w-48 flex flex-col items-center justify-center h-full ">
                <img
                  src="../../public/logoSena.png"
                  className="h-9"
                  alt="logo"
                />
              </div>

              <div className="">
                {" "}
                <h1>
                  {" "}
                  hhhhhhhhhhhhhhhhhhtttt
                </h1>{" "}
              </div>

              <div>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            {/* creo q termina a qui */}
            <div>
              <p>parrafo</p>
              <h4>titulo</h4>
            </div>
            <div className=" grid grid-col  bg-slate-100 w-96 items-center justify-center ">
              <label htmlFor="aprendiz" className=" items-center justify-center  ">Aprendiz :</label>
              <input id="aprendiz" type="text" />

              <label htmlFor="id " className=" items-center justify-center">ID:</label>
              <input id="id" type="number" />

              <label htmlFor="documento" className=" items-center justify-center">Documento :</label>
              <input id="documento" type="number" />

              <label htmlFor="correo" className=" items-center justify-center">Correo :</label>
              <input id="correo" type="email" />

              <label htmlFor="programa">Programa :</label>
              <input id="programa" type="text" />

              <label htmlFor="centro">Centro :</label>
              <input id="centro" type="text" />

              <label htmlFor="asunto">Asunto :</label>
              <input id="asunto" type="text" />
            </div>
            <div>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
            <div>
              <div>
                {" "}
                1
                <div className=" bg-slate-300 border-2 border-red-700 grid  grid-cols-8 ">
                  <p>RELACIÓN SUCINTA DEL INFORME O DE LA QUEJA PRESENTADA</p>
           
                  {" "}
                 
                  <div className=" grid grid-col   w-20">
                  <p>
                    El instructor José David López Álzate refiere: El aprendiz
                    …..……….
                  </p>
                    <label htmlFor="gestor">Gestor de la ficha :</label>
                    <input id="gestor" type="text" />

                    <label htmlFor="trimestre">Trimestre:</label>
                    <input id="trimestre" type="text" />

                    <label htmlFor="contrato">Contrato de aprendizaje :</label>
                    <input id="contrato" type="text" />

                    <label htmlFor="historial">Historial académico :</label>
                    <input id="historial" type="text" />
                  </div>
                </div>
              </div>

              <div>
                {" "}
                2
                <div>
                  <p>
                    IDENTIFICACIÓN DEL(LOS) PROBABLE(S) AUTOR(ES) DE LOS HECHOS
                  </p>
                </div>
                <div>
                  <table className="">
                    <tr>
                      <th className=" w-60 border-red-400 border-2">NOMBRE</th>
                      <th className=" w-60 border-red-400 border-2">DOCUMENTO</th>
                      <th className=" w-60 border-red-400 border-2"> ID</th>
                      <th className=" w-60 border-red-400 border-2"> PROGRAMA</th>
                    </tr>
                    <tr className="">
                      <td className=" w-20 border-red-400  ">En blanco</td>
                      <td className=" w-20 border-red-400 ">En blanco</td>
                      <td className=" w-20 border-red-400 ">En blanco</td>
                      <td className=" w-20 border-red-400  ">En blanco</td>
                    </tr>
                  </table>
                </div>
              </div>

              <div>
                {" "}
                3
                <div>
                  <p>
                    NORMAS DEL REGLAMENTO DEL APRENDIZ SENA QUE PRESUNTAMENTE
                    INFRINGIÓ EL (LOS) APRENDIZ(CES) CON ESOS HECHOS U
                    OMISIONES.
                  </p>
                </div>
                <div>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias hic, vel a recusandae eaque rem neque, voluptate
                    possimus consectetur similique pariatur, ducimus illum ad
                    aliquid ab obcaecati incidunt facilis odio.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <p>TIPO DE FALTA</p>
              </div>
              <div>
                <p>ACADÉMICA DISCIPLINARIA</p>
              </div>
            </div>
            <div>
              <div>
                <p>CALIFICACIÓN PROVISIONAL DE LA(S) PROBABLE(S) FALTA(S)</p>
              </div>
              <div>
                <p>LEVE GRAVE GRAVÍSIMA</p>
              </div>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                quaerat aut maiores dolorem eligendi accusamus repellendus ut
                adipisci quam, vel inventore porro quod corrupti atque earum
                culpa expedita quidem harum.
              </p>
            </div>
            <div>
              <div>1</div>

              <div>2</div>

              <div>3</div>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                quisquam beatae voluptatum accusantium? Ipsum sed nemo corrupti
                totam ad, corporis, ab ipsam recusandae asperiores earum ea,
                sint doloremque esse a!
              </p>
            </div>
            <div>
              <h4>
                <strong> richy</strong> Subdirector (e) Centro de Automatización
                Industrial <strong>Copia:</strong>
                Nini Yorlady Betancur Raigosa nbetancurr@sena.edu.co Laura
                Vanesa Cifuentes Lvcifuentes@sena.edu.co Coordinación Académica
                contactocai@sena.edu.co Eliana Patricia González L.
                epgonzalezl@sena.edu.co <strong>Proyectó:</strong> Eliana
                Patricia González Lotero Cargo: Apoyo Administrativo
                Coordinación Académica - Centro de Automatización Industrial{" "}
                <strong>Revisó: </strong>Nini Yorlady Betancur Raigosa - Cargo:
                Coordinadora Académica - Centro de Automatización Industrial
              </h4>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};
