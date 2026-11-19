require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require(`./routes/auth`);

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

//rutas de autenticacion
app.use(`/api/users`, authRoutes);

// Conectar con MongoDB
connectDB();

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
