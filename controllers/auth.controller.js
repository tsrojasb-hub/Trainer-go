const User = require (`../models/User`);

//funcion para registrar usuarios
const register = async (req, res) => {
    try {
        const { name, email, password, phone, role } = req.body;

        const user = new User ({
            name,
            email,
            password,
            phone,
            role
        });
        await user.save();
        res.status(201).json({
            message: `Usuario registrado correctamente`
        });
    } catch (error) {
        res.status(500).json({
            message: `Error al registrar usuario`,
            error: error.message
        });
    }
};
module.exports = { register };