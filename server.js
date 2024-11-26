import express from "express";

const app = express();
const PORT = 7000;

// Middleware para parsear JSON
app.use(express.json());

// Array de usuarios inicial
let usuarios = [
    { id: 1, nombre: "Alejandra Marin", edad: "28" },
    { id: 2, nombre: "Pedro Fernandez", edad: "37" },
];

// Ruta raíz: mensaje de bienvenida
app.get("/", (req, res) => {
    res.send("Bienvenidos a la base de datos de Recursos Humanos!");
});

// Ruta para obtener todos los usuarios
app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

// Ruta para agregar un nuevo usuario
app.post("/usuarios", (req, res) => {
    const { nombre, edad } = req.body;

    if (!nombre || !edad) {
        return res.status(400).json({ message: "nombre o edad no especificado" });
    }

    const newUser = {
        id: usuarios.length + 1,
        nombre,
        edad,
    };

    usuarios.push(newUser);

    res.status(201).json({
        message: "Usuario agregado exitosamente!",
        usuario: newUser,
    });
});

// Ruta para actualizar un usuario por su ID
app.put("/usuarios/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user1 = usuarios.find(u => u.id === userId);

    if (!user1) {
        return res.status(404).json({ message: "usuario no encontrado" });
    }

    const { nombre, edad } = req.body;

    user1.nombre = nombre || user1.nombre;
    user1.edad = edad || user1.edad;

    res.json({
        message: "Usuario actualizado correctamente",
        usuario: user1,
    });
});

// Ruta para eliminar un usuario por su ID
app.delete("/usuarios/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = usuarios.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: "usuario no encontrado" });
    }

    const deletedUser = usuarios.splice(userIndex, 1);

    res.json({
        message: "Usuario eliminado exitosamente!",
        usuario: deletedUser[0],
    });
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

