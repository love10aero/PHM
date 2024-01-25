const express = require('express');
const cors = require('cors');
const app = express();

// Habilita CORS
app.use(cors());
  

// Define una ruta para obtener datos
app.get('/api/data', (req, res) => {
    // Aquí puedes realizar acciones y enviar datos como respuesta
    res.json({ message: 'Datos desde el servidor' });
});

app.get('/', (req, res) => {
    res.send('¡Hola desde el servidor!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`);
});
