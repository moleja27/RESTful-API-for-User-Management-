import express from "express";

const app = express();

const PORT = 6000;

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});
