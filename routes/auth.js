const express = require(`express`);
const router = express.Router();
const { register } = require(`../controllers/auth.controller`);
const User = require(`../models/User`);

//ruta para registrar usuarios
router.post(`/register`, register);

//ruta para iniciar sesion
router.post (`/login`, async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne ({ email });
        if (!user) {
            return res.status(404).json ({
                message: `Usuario no encontrado`
            });
        }
        if (user.password !== password) {
            return res.status(400).json({
                message: `Contraseña incorrecta`
            });
        }
        res.status(200).json({
            message: `Inicio de sesion exitoso`,
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({
            message: `Error en el servidor`,
            error: error.message
        });
    }
});
module.exports = router;