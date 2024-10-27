// routes/auth.js
const express = require('express');
const { signUp, signIn,getUserDetails } = require('../controllers/signcontroller');

const router = express.Router(); // Créez une instance du routeur

// Route pour l'inscription
router.post('/signup', signUp);

// Route pour la connexion
router.post('/signin', signIn);
router.get('/getuserdetails', getUserDetails); // Keep it under /auth
// Exportez le routeur
module.exports = router; // Correction ici