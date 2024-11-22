import express from "express";

const app = express();

const PORT = 7000;

// Ruta para mostrar un mensaje de bienvenida en la raíz
app.get('/', (req, res) => {
    res.send("Welcome to the Books API!");
});

// Ruta para obtener todos los libros
app.get('/books', (req, res) => {
    res.json(books); // Devuelve el array de libros como respuesta en formato JSON
});

// Inicia el servidor en el puerto 7000
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});

// Array de libros
let books = [
    {
        id: 1, title: "1984", author: "George Orwell"
    },
    {
        id: 2, title: "Cien años de soledad", author: "Gabriel García Márquez"
    },
];
