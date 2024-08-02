# Image de base officielle de Node.js
FROM node:20

# Répertoire de travail dans le conteneur
WORKDIR /Peako-back

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installer les dépendances
RUN npm install --production

# Copier le reste du code de l'application dans le conteneur
COPY . .

# Exposer le port sur lequel l'application écoute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]