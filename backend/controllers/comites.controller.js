const nodemailer = require("nodemailer");
const { EMAIL, EMAIL_PASSWORD } = require("../config");
const {
  comites,
  aprendices_implicados,
  roles,
  usuarios,
} = require("../models");

/**--------------------------------
 * |  Remitente del email
 * --------------------------------*/
const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: `${EMAIL}`,
    pass: `${EMAIL_PASSWORD}`,
  },
});

/**--------------------------------
 * funcion para crear un comite
 --------------------------------*/
const createComites = async (req, res, next) => {
  try {
    const { file } = req;
    const evidencia = file.filename;
    const result = await comites.create({
      articulos: req.body.articulos.toString(),
      instructor_fk: req.body.instructor_fk,
      tipo_falta: req.body.tipo_falta,
      descripcion_solicitud: req.body.descripcion_solicitud,
      evidencia,
    });
    /**----------------------------------------------------------
     * | Este es id del comite creado: result.dataValues.id
     * ----------------------------------------------------------*/
    if (result.dataValues.id !== 0) {
      /**-----------------------------------------
       * | Envio de la notificación al gestor de
       * | solicitud de citación a comite
       * ------------------------------------------*/
      const rol = await roles.findAll({
        where: { nombre: "Administrador" || "administrador" },
      });

      const instructor = await usuarios.findOne({
        where: { id: req.body.instructor_fk },
      });

      if (rol && rol[0] && rol[0].id) {
        /**----------------------------------------------
         * | Si existe el rol gestor buscamos un usuario
         * | Con ese rol id osea gestor
         * ----------------------------------------------*/
        const gestor = await usuarios.findAll({ where: { rol_id: rol[0].id } });

        if (gestor && gestor.length !== 0) {
          /**-----------------------
           * | Email del gestor
           * -----------------------*/
          const email = gestor[0].email;

          const fechaHoraActual = new Date();
          const fechaHoraFormateada = fechaHoraActual.toLocaleString();

          const mailOptions = {
            from: `${EMAIL}`,
            to: email,
            subject: "Solicitud de Citación a Comite",
            html: `<body
            class="clean-body u_body"
            style="
              margin: 0;
              padding: 0;
              -webkit-text-size-adjust: 100%;
              background-color: #e7e7e7;
              color: hsl(0, 0%, 0%);
            "
          >
            <!--[if IE]><div class="ie-container"><![endif]-->
            <!--[if mso]><div class="mso-container"><![endif]-->
            <table
              id="u_body"
              style="
                border-collapse: collapse;
                table-layout: fixed;
                border-spacing: 0;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                vertical-align: top;
                min-width: 320px;
                margin: 0 auto;
                background-color: #e7e7e7;
                width: 100%;
              "
              cellpadding="0"
              cellspacing="0"
            >
              <tbody>
                <tr style="vertical-align: top">
                  <td
                    style="
                      word-break: break-word;
                      border-collapse: collapse !important;
                      vertical-align: top;
                    "
                  >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
          
                    <div
                      class="u-row-container"
                      style="padding: 2px 0px 0px; background-color: transparent"
                    >
                      <div
                        class="u-row"
                        style="
                          margin: 0 auto;
                          min-width: 320px;
                          max-width: 600px;
                          overflow-wrap: break-word;
                          word-wrap: break-word;
                          word-break: break-word;
                          background-color: transparent;
                        "
                      >
                        <div
                          style="
                            border-collapse: collapse;
                            display: table;
                            width: 100%;
                            height: 100%;
                            background-color: transparent;
                          "
                        >
                          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 2px 0px 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
          
                          <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                          <div
                            class="u-col u-col-100"
                            style="
                              max-width: 320px;
                              min-width: 600px;
                              display: table-cell;
                              vertical-align: top;
                            "
                          >
                            <div
                              style="
                                background-color: #ffffff;
                                height: 100%;
                                width: 100% !important;
                                border-radius: 0px;
                                -webkit-border-radius: 0px;
                                -moz-border-radius: 0px;
                              "
                            >
                              <!--[if (!mso)&(!IE)]><!--><div
                                style="
                                  box-sizing: border-box;
                                  height: 100%;
                                  padding: 0px;
                                  border-top: 0px solid transparent;
                                  border-left: 0px solid transparent;
                                  border-right: 0px solid transparent;
                                  border-bottom: 0px solid transparent;
                                  border-radius: 0px;
                                  -webkit-border-radius: 0px;
                                  -moz-border-radius: 0px;
                                "
                              ><!--<![endif]-->
                                <table
                                  style="font-family: arial, helvetica, sans-serif"
                                  role="presentation"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  border="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        class="v-container-padding-padding"
                                        style="
                                          overflow-wrap: break-word;
                                          word-break: break-word;
                                          padding: 30px 10px 10px;
                                          font-family: arial, helvetica, sans-serif;
                                        "
                                        align="left"
                                      >
                                        <h1
                                          class="v-line-height v-font-size"
                                          style="
                                            margin: 0px;
                                            color: #010008;
                                            line-height: 140%;
                                            text-align: center;
                                            word-wrap: break-word;
                                            font-family: 'Montserrat', sans-serif;
                                            font-size: 22px;
                                            font-weight: 700;
                                          "
                                        >
                                          <span>SE-JustApp </span>
                                        </h1>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
          
                    <div
                      class="u-row-container"
                      style="padding: 0px 0px 2px; background-color: transparent"
                    >
                      <div
                        class="u-row"
                        style="
                          margin: 0 auto;
                          min-width: 320px;
                          max-width: 600px;
                          overflow-wrap: break-word;
                          word-wrap: break-word;
                          word-break: break-word;
                          background-color: transparent;
                        "
                      >
                        <div
                          style="
                            border-collapse: collapse;
                            display: table;
                            width: 100%;
                            height: 100%;
                            background-color: transparent;
                          "
                        >
                          <div
                            class="u-col u-col-50"
                            style="
                              max-width: 320px;
                              min-width: 300px;
                              display: table-cell;
                              vertical-align: top;
                            "
                          >
                            <div
                              style="
                                background-color: #ffffff;
                                height: 100%;
                                width: 100% !important;
                                border-radius: 0px;
                                -webkit-border-radius: 0px;
                                -moz-border-radius: 0px;
                              "
                            >
                              <div
                                style="
                                  box-sizing: border-box;
                                  height: 100%;
                                  padding: 0px;
                                  border-top: 0px solid transparent;
                                  border-left: 0px solid transparent;
                                  border-right: 0px solid transparent;
                                  border-bottom: 0px solid transparent;
                                  border-radius: 0px;
                                  -webkit-border-radius: 0px;
                                  -moz-border-radius: 0px;
                                "
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
          
                    <div
                      class="u-row-container"
                      style="padding: 0px; background-color: transparent"
                    >
                      <div
                        class="u-row"
                        style="
                          margin: 0 auto;
                          min-width: 320px;
                          max-width: 600px;
                          overflow-wrap: break-word;
                          word-wrap: break-word;
                          word-break: break-word;
                          background-color: transparent;
                        "
                      >
                        <div
                          style="
                            border-collapse: collapse;
                            display: table;
                            width: 100%;
                            height: 100%;
                            background-color: transparent;
                          "
                        >
                          <div
                            class="u-col u-col-100"
                            style="
                              max-width: 320px;
                              min-width: 600px;
                              display: table-cell;
                              vertical-align: top;
                            "
                          >
                            <div
                              style="
                                background-color: #ffffff;
                                height: 100%;
                                width: 100% !important;
                                border-radius: 0px;
                                -webkit-border-radius: 0px;
                                -moz-border-radius: 0px;
                              "
                            >
                              <!--[if (!mso)&(!IE)]><!--><div
                                style="
                                  box-sizing: border-box;
                                  height: 100%;
                                  padding: 0px;
                                  border-top: 0px solid transparent;
                                  border-left: 0px solid transparent;
                                  border-right: 0px solid transparent;
                                  border-bottom: 0px solid transparent;
                                  border-radius: 0px;
                                  -webkit-border-radius: 0px;
                                  -moz-border-radius: 0px;
                                "
                              ><!--<![endif]-->
                                <table
                                  id="u_content_heading_13"
                                  style="font-family: arial, helvetica, sans-serif"
                                  role="presentation"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  border="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        class="v-container-padding-padding"
                                        style="
                                          overflow-wrap: break-word;
                                          word-break: break-word;
                                          padding: 10px;
                                          font-family: arial, helvetica, sans-serif;
                                        "
                                        align="left"
                                      >
                                        <h1
                                          class="v-line-height v-font-size"
                                          style="
                                            margin: 0px;
                                            color: #000000;
                                            line-height: 140%;
                                            text-align: center;
                                            word-wrap: break-word;
                                            font-family: 'Montserrat', sans-serif;
                                            font-size: 18px;
                                            font-weight: 700;
                                          "
                                        >
                                          <span style="line-height: 21.6px"
                                            ><span style="line-height: 21.6px"
                                              >Solicitud de Citación a Comite</span
                                            ></span
                                          >
                                        </h1>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
          
                                <table
                                  id="u_content_text_4"
                                  style="font-family: arial, helvetica, sans-serif"
                                  role="presentation"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  border="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        class="v-container-padding-padding"
                                        style="
                                          overflow-wrap: break-word;
                                          word-break: break-word;
                                          padding: 10px;
                                          font-family: arial, helvetica, sans-serif;
                                        "
                                        align="left"
                                      >
                                        <div
                                          class="v-line-height v-font-size"
                                          style="
                                            font-size: 14px;
                                            line-height: 140%;
                                            text-align: center;
                                            word-wrap: break-word;
                                          "
                                        >
                                          <p style="line-height: 140%">
                                            El instructor <strong>${
                                              instructor &&
                                              instructor.nombre_completo
                                                ? instructor.nombre_completo
                                                : ""
                                            }</strong> hizo una solicitud de
                                            comité el dia ${fechaHoraFormateada}
                                          </p>
                                          <p style="line-height: 140%">
                                            Para ver los detalles de esta solicitud, haga
                                            clic en el siguiente botón.
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
          
                                <table
                                  style="font-family: arial, helvetica, sans-serif"
                                  role="presentation"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  border="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        class="v-container-padding-padding"
                                        style="
                                          overflow-wrap: break-word;
                                          word-break: break-word;
                                          padding: 10px;
                                          font-family: arial, helvetica, sans-serif;
                                        "
                                        align="left"
                                      >
                                        <div align="center">
                                          <a
                                            href="http://localhost:5173/"
                                            target="_blank"
                                            class="v-button v-font-size"
                                            style="
                                              box-sizing: border-box;
                                              display: inline-block;
                                              text-decoration: none;
                                              -webkit-text-size-adjust: none;
                                              text-align: center;
                                              color: #ffffff;
                                              background-color: #1e40af;
                                              border-radius: 4px;
                                              -webkit-border-radius: 4px;
                                              -moz-border-radius: 4px;
                                              width: 56%;
                                              max-width: 100%;
                                              overflow-wrap: break-word;
                                              word-break: break-word;
                                              word-wrap: break-word;
                                              mso-border-alt: none;
                                              font-size: 14px;
                                            "
                                          >
                                            <span
                                              class="v-line-height"
                                              style="
                                                display: block;
                                                padding: 10px 20px;
                                                line-height: 120%;
                                              "
                                              ><span style="line-height: 16.8px"
                                                >Ver ahora</span
                                              ></span
                                            >
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
          
                    <div
                      class="u-row-container"
                      style="padding: 0px; background-color: transparent"
                    >
                      <div
                        class="u-row"
                        style="
                          margin: 0 auto;
                          min-width: 320px;
                          max-width: 600px;
                          overflow-wrap: break-word;
                          word-wrap: break-word;
                          word-break: break-word;
                          background-color: transparent;
                        "
                      >
                        <div
                          style="
                            border-collapse: collapse;
                            display: table;
                            width: 100%;
                            height: 100%;
                            background-color: transparent;
                          "
                        >
                          <div
                            class="u-col u-col-100"
                            style="
                              max-width: 320px;
                              min-width: 600px;
                              display: table-cell;
                              vertical-align: top;
                            "
                          >
                            <div
                              style="
                                background-color: #ffffff;
                                height: 100%;
                                width: 100% !important;
                                border-radius: 0px;
                                -webkit-border-radius: 0px;
                                -moz-border-radius: 0px;
                              "
                            >
                              <!--[if (!mso)&(!IE)]><!--><div
                                style="
                                  box-sizing: border-box;
                                  height: 100%;
                                  padding: 0px;
                                  border-top: 0px solid transparent;
                                  border-left: 0px solid transparent;
                                  border-right: 0px solid transparent;
                                  border-bottom: 0px solid transparent;
                                  border-radius: 0px;
                                  -webkit-border-radius: 0px;
                                  -moz-border-radius: 0px;
                                "
                              ><!--<![endif]-->
                                <table
                                  id="u_content_image_9"
                                  style="font-family: arial, helvetica, sans-serif"
                                  role="presentation"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  border="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        class="v-container-padding-padding"
                                        style="
                                          overflow-wrap: break-word;
                                          word-break: break-word;
                                          padding: 60px 10px 18px;
                                          font-family: arial, helvetica, sans-serif;
                                        "
                                        align="left"
                                      >
                                        <table
                                          width="100%"
                                          cellpadding="0"
                                          cellspacing="0"
                                          border="0"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  padding-right: 0px;
                                                  padding-left: 0px;
                                                "
                                                align="center"
                                              >
                                                <img
                                                  align="center"
                                                  border="0"
                                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYiiPo2XhHhFeApis5B484lBbi9iUQY7E6cA&usqp=CAU"
                                                  alt="image"
                                                  title="image"
                                                  style="
                                                    outline: none;
                                                    text-decoration: none;
                                                    -ms-interpolation-mode: bicubic;
                                                    clear: both;
                                                    display: inline-block !important;
                                                    border: none;
                                                    height: auto;
                                                    float: none;
                                                    width: 11%;
                                                    max-width: 63.8px;
                                                  "
                                                  width="63.8"
                                                  class="v-src-width v-src-max-width"
                                                />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
          
                                <table
                                  id="u_content_social_1"
                                  style="font-family: arial, helvetica, sans-serif"
                                  role="presentation"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  border="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        class="v-container-padding-padding"
                                        style="
                                          overflow-wrap: break-word;
                                          word-break: break-word;
                                          padding: 15px 10px 10px;
                                          font-family: arial, helvetica, sans-serif;
                                        "
                                        align="left"
                                      >
                                        <div align="center">
                                          <div style="display: table; max-width: 167px">
                                            <table
                                              align="left"
                                              border="0"
                                              cellspacing="0"
                                              cellpadding="0"
                                              width="32"
                                              height="32"
                                              style="
                                                width: 32px !important;
                                                height: 32px !important;
                                                display: inline-block;
                                                border-collapse: collapse;
                                                table-layout: fixed;
                                                border-spacing: 0;
                                                mso-table-lspace: 0pt;
                                                mso-table-rspace: 0pt;
                                                vertical-align: top;
                                                margin-right: 10px;
                                              "
                                            >
                                              <tbody>
                                                <tr style="vertical-align: top">
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                    style="
                                                      word-break: break-word;
                                                      border-collapse: collapse !important;
                                                      vertical-align: top;
                                                    "
                                                  >
                                                    <a
                                                      href="#"
                                                      title="Facebook"
                                                      target="_blank"
                                                    >
                                                      <img
                                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMW9AB13KyfzyL04pPQ6MNSttPFG3O06v9ig&usqp=CAU"
                                                        alt="Facebook"
                                                        title="Facebook"
                                                        width="32"
                                                        style="
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                          clear: both;
                                                          display: block !important;
                                                          border: none;
                                                          height: auto;
                                                          float: none;
                                                          max-width: 32px !important;
                                                        "
                                                      />
                                                    </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table
                                              align="left"
                                              border="0"
                                              cellspacing="0"
                                              cellpadding="0"
                                              width="32"
                                              height="32"
                                              style="
                                                width: 32px !important;
                                                height: 32px !important;
                                                display: inline-block;
                                                border-collapse: collapse;
                                                table-layout: fixed;
                                                border-spacing: 0;
                                                mso-table-lspace: 0pt;
                                                mso-table-rspace: 0pt;
                                                vertical-align: top;
                                                margin-right: 10px;
                                              "
                                            >
                                              <tbody>
                                                <tr style="vertical-align: top">
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                    style="
                                                      word-break: break-word;
                                                      border-collapse: collapse !important;
                                                      vertical-align: top;
                                                    "
                                                  >
                                                    <a
                                                      href="#"
                                                      title="Twitter"
                                                      target="_blank"
                                                    >
                                                      <img
                                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5H5ExNVGpq1_82v1c28DEamR0CkFNy81tA&usqp=CAU"
                                                        alt="Twitter"
                                                        title="Twitter"
                                                        width="32"
                                                        style="
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                          clear: both;
                                                          display: block !important;
                                                          border: none;
                                                          height: auto;
                                                          float: none;
                                                          max-width: 32px !important;
                                                        "
                                                      />
                                                    </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table
                                              align="left"
                                              border="0"
                                              cellspacing="0"
                                              cellpadding="0"
                                              width="32"
                                              height="32"
                                              style="
                                                width: 32px !important;
                                                height: 32px !important;
                                                display: inline-block;
                                                border-collapse: collapse;
                                                table-layout: fixed;
                                                border-spacing: 0;
                                                mso-table-lspace: 0pt;
                                                mso-table-rspace: 0pt;
                                                vertical-align: top;
                                                margin-right: 0px;
                                              "
                                            >
                                              <tbody>
                                                <tr style="vertical-align: top">
                                                  <td
                                                    align="left"
                                                    valign="middle"
                                                    style="
                                                      word-break: break-word;
                                                      border-collapse: collapse !important;
                                                      vertical-align: top;
                                                    "
                                                  >
                                                    <a
                                                      href="#"
                                                      title="Instagram"
                                                      target="_blank"
                                                    >
                                                      <img
                                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZ-Ld3BCxs2F0SZEqzWuCsWRl-ZEm1IgkGA&usqp=CAU"
                                                        alt="Instagram"
                                                        title="Instagram"
                                                        width="32"
                                                        style="
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                          clear: both;
                                                          display: block !important;
                                                          border: none;
                                                          height: auto;
                                                          float: none;
                                                          max-width: 32px !important;
                                                        "
                                                      />
                                                    </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
          
                                <table
                                  id="u_content_text_5"
                                  style="font-family: arial, helvetica, sans-serif"
                                  role="presentation"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  border="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        class="v-container-padding-padding"
                                        style="
                                          overflow-wrap: break-word;
                                          word-break: break-word;
                                          padding: 10px 100px 60px;
                                          font-family: arial, helvetica, sans-serif;
                                        "
                                        align="left"
                                      >
                                        <div
                                          class="v-line-height v-font-size"
                                          style="
                                            font-size: 14px;
                                            color: #000000;
                                            line-height: 170%;
                                            text-align: center;
                                            word-wrap: break-word;
                                          "
                                        >
                                          <p style="font-size: 14px; line-height: 170%">
                                            <strong
                                              >&nbsp; POLÍTICA DE PRIVACIDAD &nbsp; |
                                              &nbsp; SITIO WEB</strong
                                            >
                                          </p>
                                          <p style="font-size: 14px; line-height: 170%">
                                            &nbsp;
                                          </p>
                                          <p style="font-size: 14px; line-height: 170%">
                                            Se-JustApp es una aplicación creada para la
                                            automatización de procesos de comités tanto
                                            académicos como disciplinarios del SENA.&nbsp;
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
          
                                <table
                                  style="font-family: arial, helvetica, sans-serif"
                                  role="presentation"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  border="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        class="v-container-padding-padding"
                                        style="
                                          overflow-wrap: break-word;
                                          word-break: break-word;
                                          padding: 0px;
                                          font-family: arial, helvetica, sans-serif;
                                        "
                                        align="left"
                                      >
                                        <table
                                          height="0px"
                                          align="center"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            border-top: 1px solid #bbbbbb;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                  font-size: 0px;
                                                  line-height: 0px;
                                                  mso-line-height-rule: exactly;
                                                  -ms-text-size-adjust: 100%;
                                                  -webkit-text-size-adjust: 100%;
                                                "
                                              >
                                                <span>&nbsp;</span>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
          
                                <!--[if (!mso)&(!IE)]><!-->
                              </div>
                              <!--<![endif]-->
                            </div>
                          </div>
                          <!--[if (mso)|(IE)]></td><![endif]-->
                          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                        </div>
                      </div>
                    </div>
          
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
            <!--[if mso]></div><![endif]-->
            <!--[if IE]></div><![endif]-->
          </body>
          `,
          };

          await transport.sendMail(mailOptions);
        }
      }

      req.comIdCreado = result.dataValues.id;
      /**---------------------------------------
       * | Agregamos los aprendices implicados
       * ---------------------------------------*/

      const comite = result.dataValues.id;

      const aprendicesImplicado = req.body.aprendices_implicados.split(",");
      const creaciones = aprendicesImplicado.map(async (aprendiz) => {
        const usuario = await usuarios.findOne({
          where: { documento: aprendiz },
        });

        if (usuario) {
          const nuevoAprendiz = await aprendices_implicados.create({
            documento: aprendiz,
            comite_fk: comite,
            usuario_id: usuario.id,
            tipo_documento: "CC",
          });
          return nuevoAprendiz;
        }
        return null;
      });

      const resulAgregarApre = await Promise.all(creaciones);
      req.resulAgregarApre = resulAgregarApre;
      return next();
    }

    return res.status(500).json({ message: "Error al crear un nuevo comite." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Error al crear un nuevo comite: ${error.message}` });
  }
};

/**-----------------------------------------
 * funcion para obtener todos los comites
 -----------------------------------------*/
const getComites = async (req, res) => {
  try {
    const result = await comites.findAll();

    if (result.length !== 0) {
      return res.status(200).json(result);
    }
    return res.status(404).json({ message: "No hay comites" });
  } catch (error) {
    res.status(500).json({
      message: `Error al obtener todos los comites detalles: ${error.message}`,
    });
  }
};

/**-----------------------------------------
 * funcion para obtener un comite por id
 -----------------------------------------*/
const comitebyId = async (req, res) => {
  try {
    const { id } = req.params;

    const comite = await comites.findOne({ where: { id } });

    if (comite) {
      return res.status(200).json(comite);
    } else {
      return res.status(404).json({ message: `No se encontraron comites.` });
    }
  } catch (error) {
    res.status(500).json({
      message: `Error al obtener un comite detalles: ${error.message}`,
    });
  }
};

/**----------------------------------
 * funcion para actualizar un comite
 ----------------------------------*/
const updateComite = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await comites.update(req.body, {
      where: { id },
    });
    if (updated) {
      const actualizado = await comites.findOne({ where: { id } });
      return res.status(200).json(actualizado);
    }

    return res
      .status(404)
      .json({ message: "No existe un comite con este id." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**--------------------------------
 * funciones para eliminar un comite
 --------------------------------*/
const deleteComite = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await comites.destroy({
      where: { id },
    });
    if (deleted) {
      return res.json({ message: "rol eliminado" });
    } else {
      return res
        .status(404)
        .json({ message: "No existe un comite con este id." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAprendicesImplicados = async (req, res) => {
  try {
    const { comite_fk } = req.body;
    const aprendices = await aprendices_implicados.findAll();

    const filtrados = await aprendices.filter(
      (aprendiz) => aprendiz.comite_fk === comite_fk
    );

    const buscados = await filtrados.map(async (aprendiz) => {
      const usuario = await usuarios.findOne({
        where: { documento: aprendiz.dataValues.documento },
      });
      return usuario.dataValues;
    });

    const aprendicesFiltrados = await Promise.all(buscados);

    if (aprendices && buscados && aprendicesFiltrados) {
      return res.status(200).json(aprendicesFiltrados);
    }
    return res
      .status(404)
      .json({ message: `No se encontraron aprendices para ese comite` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// updatecomite,
module.exports = {
  createComites,
  getComites,
  deleteComite,
  updateComite,
  comitebyId,
  getAprendicesImplicados,
};
