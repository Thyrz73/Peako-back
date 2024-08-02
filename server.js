const express = require('express');
const app = express();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger/swaggerConfig');
const tasksRouter = require('./routes/routesSwagger');
const port = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Route de base
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/tasks', tasksRouter);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

