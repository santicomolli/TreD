import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {

    const {email, nombre, token } = datos ;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
      

      const info = await transport.sendMail({
        from: '"TRED - ESTUDIO DE ARQUITECTURA" <cuenta@tred.com>',
        to: email,
        subject: "Tred - Confirma tu cuenta",
        text: "Confirma tu cuenta en Tred",
        html: `<p>Hola: ${nombre} Confirma tu cuenta en Tred</p>
            <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace:
              <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar Cuenta</a>  
            </p>
            <p>Si tu no creaste esta cuenta solo ignora este mensaje.</p>
        `,
      })
};



export const emailOlvidePassword = async (datos) => {

  const {email, nombre, token } = datos ;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
    });
    

    const info = await transport.sendMail({
      from: '""TRED - ESTUDIO DE ARQUITECTURA" <cuentas@Tred.com>',
      to: email,
      subject: "Tred - Restablecer contraseña",
      text: "Restablece tu contraseña en Tred",
      html: `<p>Hola: ${nombre} solicitaste un cambio de contraseña</p>
          <p>sigue el siguiente enlace para generar una nueva contraseña:
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer contraseña</a>  
          </p>
          <p>Si tu no solicitaste un cambio de contraseña ignora este mensaje.</p>
      `,
    })
};