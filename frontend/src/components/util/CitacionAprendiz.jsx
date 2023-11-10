import DefaultLayout from "../../Layout/DefaultLayout";

export const CitacionAprendiz = () => {
  return (
    <DefaultLayout>
      <div className="   w-full h-full mt-10  ">
        <div className=" w-full h-full ">
          <form>
            <div className="grid grid-cols-3">
              <div className=" flex flex-col items-center justify-center h-full border-2 border-black">
                <img
                  src="../../public/logoSena.png"
                  className="h-24 w-24"
                  alt="logo"
                />
              </div>

              <div className="  w-54 h-auto border-2 border-black">
                <p>
                  SERVICIO NACIONAL DE APRENDIZAJE – SENA COMUNICACIÓN AL
                  APRENDIZ PRESUNTAMENTE IMPLICADO
                </p>
              </div>

              <div className=" grid grid-cols-1 h-full items-center justify-center border-2 border-black">
                <p className="  w-52 ">Versión: 01</p>
                <p className="  w-52 ">
                  <br /> Octubre 28 de 2013
                </p>
              </div>
            </div>
            {/* creo q termina a qui */}
            <br />

            <div className=" items-center justify-center grid grid-col">
              <label htmlFor="codigo">17-9219-101 :</label>
              <br />
              <label htmlFor="fecha">
                Manizales, 24 de noviembre de 2023 :
              </label>
            </div>
            <br />
            <div className=" grid grid-cols-2  w-96 items-center justify-center ">
              <label htmlFor="aprendiz" className="items-center justify-center">
                Aprendiz :
              </label>
              <input
                id="aprendiz"
                type="text"
                placeholder="Darlin"
                className=" border-2 border-gray-100 "
                disabled
              />

              <label htmlFor="id" className="items-center justify-center">
                ID:
              </label>
              <input
                id="id"
                type="number"
                placeholder="2504591"
                className="  border-2 border-gray-100"
                disabled
              />

              <label
                htmlFor="documento"
                className="items-center justify-center">
                Documento :
              </label>
              <input
                id="documento"
                type="number"
                placeholder="1076817756"
                className=" border-2 border-gray-100"
                disabled
              />

              <label htmlFor="correo" className="items-center justify-center">
                Correo :
              </label>
              <input
                id="correo"
                type="email"
                placeholder="sansonrivas@gmail.com"
                className="border-2 border-gray-100"
                disabled
              />

              <label htmlFor="programa">Programa :</label>
              <input
                id="programa"
                type="text"
                placeholder="Analisis y desarrollo de s."
                className=" border-2 border-gray-100"
                disabled
              />

              <label htmlFor="centro">Centro :</label>
              <input
                id="centro"
                type="text"
                placeholder="Automatizacion industrial"
                className=" border-2 border-gray-100"
                disabled
              />

              <label htmlFor="asunto">Asunto :</label>
              <input
                id="asunto"
                type="text"
                placeholder="Comunicación al aprendiz presuntamente implicado en informe o queja"
                className="border-2 border-gray-100"
                disabled
              />
            </div>
            <br />
            <div>
              <p>
                {" "}
                <strong>
                  Asunto: Comunicación al aprendiz presuntamente implicado en
                  informe o queja
                </strong>{" "}
              </p>
            </div>
            <br />
            <br />
            <div>
              <p>
                De conformidad con lo dispuesto en el ,
                <strong>
                  <label htmlFor="capitulo">CAPITULO III artículo 9, </label>
                </strong>
                del Reglamento del Aprendiz SENA, adoptado mediante Acuerdo
                00007 del 30 de abril de 2012, comedidamente le comunico que se
                ha informado a este Centro sobre sucesos presentados dentro la
                etapa lectiva y que requieren revisión inmediata.
              </p>
            </div>
            <div className="border-2 justify-center">
              <div className=" bordr-2">
                <div className=" grid grid-cols-2  w-8/12 ">
                  <p className="border-2 border-black w-58  grid grid-col justify-center items-center">
                    RELACIÓN SUCINTA DEL INFORME O DE LA QUEJA PRESENTADA
                  </p>{" "}
                  <div className="border-2 border-black grid grid-col w-96">
                    <p className="justify-center items-center grid grid-col">
                      El instructor José David López Álzate refiere:
                      <label className="forbid-pointer-events">
                      A el aprendiz :
                      <input type="text" disabled  placeholder="  Darlin Andres" />
                    </label>
                      <br />
                      <br />
                    </p>

                    <label className="forbid-pointer-events">
                      Gestor de la ficha:
                      <input type="text" disabled  placeholder="  Andres julian" />
                    </label>

                    <label className="forbid-pointer-events">
                      Trimestre:
                      <input type="text" disabled placeholder="  7" />
                    </label>

                    <label className="forbid-pointer-events">
                      Contrato de aprendizaje:
                      <input type="text" disabled  placeholder=" Envia"/>
                    </label>

                    <label className="forbid-pointer-events">
                      Historial académico:
                      <input type="text" disabled placeholder="  3 Felicitaciones" />
                    </label>
                  </div>
                </div>
              </div>
              {/* cierre */}
              <br />
              <div className="grid grid-cols-2  w-8/12">
                <div className="border-2 border-black items-center justify-center grid dgrid-col ">
                  <p>
                    IDENTIFICACIÓN DEL(LOS) PROBABLE(S) AUTOR(ES) DE LOS HECHOS
                  </p>
                </div>
                <div className="border-2 border-black  grid grid-cols-4 w-96 ">
                  <div className=" items-center justify-center">
                    <div className="border-2 border-black   grid grid-col justify-center items-center ">
                      NOMBRE
                    </div>
                    <div className="border-2 border-black h-24 ">
                      BRAYAN ESTIVEN GOMES NOGUERA
                    </div>
                  </div>

                  <div className=" items-center justify-center">
                    <div className="border-2 border-black  grid grid-col justify-center items-center ">
                      DOCUMENTO
                    </div>
                    <div className="border-2 border-black h-24 grid grid-col items-center justify-center">
                      {" "}
                      1076826459
                    </div>
                  </div>
                  <div className=" items-center justify-center">
                    <div className="border-2 border-black grid grid-col justify-center items-center ">
                      ID
                    </div>
                    <div className="border-2 border-black h-24 grid grid-col items-center justify-center">
                      {" "}
                      2504591
                    </div>
                  </div>
                  <div className=" items-center justify-center">
                    <div className=" border-black h-32  grid grid-col justify-center items-center ">
                      Adso
                    </div>
                  </div>
                </div>
              </div>
              <br />
              {/* cierre */}
              <div className="grid grid-cols-2  w-8/12">
                <div className="border-2 border-black items-center justify-center grid dgrid-col ">
                  <p>
                    NORMAS DEL REGLAMENTO DEL APRENDIZ SENA QUE PRESUNTAMENTE
                    INFRINGIÓ EL (LOS) APRENDIZ(CES) CON ESOS HECHOS U
                    OMISIONES.
                  </p>
                </div>
                <div className="border-2 border-black  w-96">
                  <p>
                    CAPÍTULO III. Deberes el aprendiz SENA. Artículo 9, Se
                    entiende por deber, la obligación legal, social y moral que
                    compromete a la persona a cumplir con determinada actuación,
                    institución.
                    <br />
                    <br />
                    Cumplir con todas las actividades propias de su proceso de
                    aprendizaje o del plan de mejoramiento, definidas durante su
                    etapa lectiva y productiva.
                  </p>
                </div>
              </div>
            </div>

            <br />
            <div className=" grid grid-col  w-full">
              <div className="grid grid-cols-2  w-8/12">
                <div className="border-2 border-black  ">
                  <p>TIPO DE FALTA</p>
                </div>
                <div className="border-2 border-black  w-96">
                  <p>ACADÉMICA DISCIPLINARIA</p>
                </div>
              </div>
              <div className="grid grid-cols-2   w-8/12">
                <div className="border-2 border-black ">
                  <p>CALIFICACIÓN PROVISIONAL DE LA(S) PROBABLE(S) FALTA(S)</p>
                </div>
                <div className="border-2 border-black  w-96">
                  <p>LEVE GRAVE GRAVÍSIMA</p>
                </div>
              </div>
            </div>
            <br />
            <br />

            <div>
              <p>
                Teniendo en cuenta a lo anterior, le informo que usted tiene
                derecho a presentar sus descargos ante el Comité de Evaluación y
                Seguimiento del Centro, en forma escrita o verbal, así como a
                controvertir las pruebas allegadas o que se
              </p>
              <br />
              <br />
            </div>
            <div className="grid grid-cols-3">
              <div className=" flex flex-col items-center justify-center h-full border-2 border-black">
                <img
                  src="../../public/logoSena.png"
                  className="h-24 w-24"
                  alt="logo"
                />
              </div>

              <div className="  w-54 h-auto border-2 border-black">
                <p>
                  SERVICIO NACIONAL DE APRENDIZAJE – SENA COMUNICACIÓN AL
                  APRENDIZ PRESUNTAMENTE IMPLICADO
                </p>
              </div>

              <div className=" grid grid-cols-1 h-full items-center justify-center border-2 border-black">
                <label htmlFor="version">Version: 1</label>
                <p className="  w-52 ">
                  <label htmlFor="fecha">octubre 28 de 2023</label>
                </p>
              </div>
            </div>

            <div>
              <p>
                alleguen en su contra y aportar y/o solicitar la práctica de las
                pruebas que considere pertinentes.
              </p>
              <br />
              <p>
                Para la diligencia de presentación de descargos y de recepción
                de las pruebas, el Comité de Evaluación y Seguimiento del Centro
                ha fijado el{" "}
                <strong>
                  viernes 03 de noviembre de 2023, a las 10:00 a.m.
                </strong>
                el cual se llevará a cabo de manera presencial en el ambiente
                <strong> CNC.</strong>
                <br />
                <br />
                <p>Esperamos su puntual asistencia.</p>
                <br />
                <br />
              </p>
            </div>
            <div>
              <h4>
                <strong> Juan Carlos Ruge Osorio</strong>
                <br />
                Subdirector (e) <br />
                Centro de Automatización Industrial <br /> <br />{" "}
                <strong>Copia:</strong>
                Nini Yorlady Betancur Raigosa{" "}
                <strong>
                  <label htmlFor="nini">nbetancurr@sena.edu.co:</label>{" "}
                </strong>
                <br />
                Laura Vanesa Cifuentes{" "}
                <strong>
                  <label htmlFor="laura">Lvcifuentes@sena.edu.co :</label>
                </strong>
                <br />
                Coordinación Académica{" "}
                <strong>
                  {" "}
                  <label htmlFor="coordinacion">
                    contactocai@sena.edu.co :
                  </label>
                </strong>
                <br /> Eliana Patricia González L.
                <strong>
                  {" "}
                  <label htmlFor="eliana">epgonzalezl@sena.edu.co :</label>
                </strong>
                <br />
                <br />
                <br />
                <strong>Proyectó:</strong>{" "}
                <label htmlFor="eliana">Eliana Patricia González L.</label>
                <br />
                Cargo: Apoyo Administrativo Coordinación Académica - Centro de
                Automatización Industrial
                <br />
                <br /> <strong>Revisó: </strong>
                <label htmlFor="eliana">Nini Yorlady Betancur Raigosa</label>
                <br /> Cargo: Coordinadora Académica - Centro de Automatización
                Industrial
              </h4>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};
