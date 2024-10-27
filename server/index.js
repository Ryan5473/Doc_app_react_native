// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authroute = require('./routes/auth');
const blogpostrouter = require('./routes/blogpost');

dotenv.config(); // Charger les variables d'environnement

const app = express();
app.use(cors()); // Autoriser les requêtes CORS
app.use(express.json()); // Middleware pour parser le JSON

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Utilisation des routes
app.use('/api/auth', authroute);
app.use('/api/posts', blogpostrouter);

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
  });