const express = require('express');
const app = express();
const corsMiddleware = require('./corsMiddleware');
const logger = require('./logger');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger/swaggerConfig');
const tasksRouter = require('./routes/routesSwagger');

const PORT = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// CORS
app.use(corsMiddleware);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Exemple de middleware pour loguer chaque requête
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use((err, req, res, next) => {
  logger.error(`Error: ${err.message}`);
  res.status(500).send('Something went wrong');
});

// Route de base
app.get('/', (req, res) => {
  res.send('Hello World!');
  logger.info('Hello World route accessed');
});

app.use('/tasks', tasksRouter);

// Démarrage du serveur
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { app, server };