import DefaultLayout from "../../Layout/DefaultLayout";

export const CitacionAprendiz = () => {
  return (
    <DefaultLayout>
      <div className="  bg-red-600  w-full h-full mt-10  border-8 border-blue-600">
        <div className=" w-full h-full bg-amber-400">
          <form>
            <div 
              className="w-full  h-28 bg-red-500  flex flex-row items-center justify-center ">
              <div className=" bg-blue-800  w-48 flex flex-col items-center justify-center h-full">
                <img
                  src="../../public/logoSena.png"
                  className="h-9"
                  alt="logo"
                />
              </div>

              <div>
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
            <div>
              <p>parrafo</p>
              <h4>titulo</h4>
            </div>
            <div>
              <label htmlFor="aprendiz">Aprendiz :</label>
              <input id="aprendiz" type="text" />

              <label htmlFor="id">ID:</label>
              <input id="id" type="number" />

              <label htmlFor="documento">Documento :</label>
              <input id="documento" type="number" />

              <label htmlFor="correo">Correo :</label>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit aspernatur animi ipsam eveniet ipsa! Reiciendis natus
                excepturi tempore. Possimus nulla nesciunt suscipit quas ullam
                eligendi, totam voluptatem illo aut sed.{" "}
              </p>
            </div>
            <div>
              <div>
                {" "}
                1
                <div>
                  <p>RELACIÓN SUCINTA DEL INFORME O DE LA QUEJA PRESENTADA</p>
                </div>
                <div>
                  {" "}
                  <p>
                    El instructor José David López Álzate refiere: El aprendiz
                    …..……….
                  </p>
                  <div>
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
                  <table>
                    <tr>
                      <th>NOMBRE</th>
                      <th>DOCUMENTO</th>
                      <th> ID</th>
                      <th> PROGRAMA</th>
                    </tr>
                    <tr>
                      <td>En blanco</td>
                      <td>En blanco</td>
                      <td>En blanco</td>
                      <td>En blanco</td>
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
