const express = require('express');
const connectDB = require('./database/db');
const userRoutes = require('./routes/user');
const userRondas = require('./routes/ronda');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación!');
});

app.use('/api', userRoutes);
app.use('/api', userRondas);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

