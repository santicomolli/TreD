// import express from "express";
// const router = express.Router();
// import { registrar, autenticar, confirmar, olvidePassword, comprobarToken, nuevoPassword, perfil } from './usuarioController.js';
// import checkAuth from "../middleware/checkAuth.js";
// // Creacion, Registro y Confirmacion de usuarios
// router.post( "/", registrar);
// router.post("/login", autenticar);
// router.get("/confirmar/:token", confirmar);
// router.post("/olvide-password", olvidePassword);
// router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

// router.get("/perfil", checkAuth, perfil)

// export default router;

import express from "express";
import { formularioLogin } from "../controllers/usuarioController.js";

const router = express.Router(formularioLogin);

router.get('/login', );

export default router;