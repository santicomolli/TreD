import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import usuarioRoutes from './routes/usuarioRoutes.js'

//creo la app
const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

//config cors 
// const whitelist = [process.env.FRONTEND_URL];

// const corsOptions = {
//     origin: function(origin, callback) {
//         if(whitelist.includes(origin)) {
//             callback(null, true);    
//         } else {
//             callback(new Error("Error de Cors"));
//         }
//     },
// };

// app.use(cors(corsOptions));

//routing
app.use('/auth', usuarioRoutes)

//habilitar pug
app.set('view engine', 'pug');
app.set('views', './views')

//puerto
const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
});