// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/usermodel');

// Inscription (Sign Up)
const signUp = async (req, res) => {
  const { email, name, prename, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'L\'utilisateur existe déjà.' });
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const newUser = new User({
      email,
      name,
      prename,
      password: hashedPassword,
    });

    // Sauvegarder l'utilisateur dans la base de données
    await newUser.save();
    res.status(201).json({ message: 'Inscription réussie.' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'inscription.', error: error.message });
  }
};

// Connexion (Sign In)
/*
const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Identifiants invalides.' });
    }

    // Vérifier le mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Identifiants invalides.' });
    }

    // Générer un token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la connexion.', error: error.message });
  }
};
*/
const signIn = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Identifiants invalides.' });
      }
  
      // Check the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Identifiants invalides.' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      
      // Respond with the token and user ID
      res.json({ token, userId: user._id });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la connexion.', error: error.message });
    }
  };
/*
const getUserDetails = async (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract the token from the header
  
    if (!token) {
      return res.status(401).json({ message: 'Token manquant.' }); // Token is missing
    }
  
    try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.id; // Get the user ID from the decoded token
  
      // Fetch user details from the database
      const user = await User.findById(userId).select('email name prename'); // Fetch only the required fields
  
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé.' }); // User not found
      }
  
      res.json(user); // Return the user details
    } catch (error) {
      // Handle token verification errors
      if (error.name === 'JsonWebTokenError') {
        return res.status(403).json({ message: 'Token invalide.' }); // Invalid token
      } else if (error.name === 'TokenExpiredError') {
        return res.status(403).json({ message: 'Token expiré.' }); // Expired token
      }
  
      // Handle other errors
      res.status(500).json({ message: 'Erreur lors de la récupération des détails de l\'utilisateur.', error: error.message });
    }
  };
  */const getUserDetails = async (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token manquant.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const user = await User.findById(userId).select('email name prename');

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }

    res.json(user);
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(403).json({ message: 'Token invalide.' });
    } else if (error.name === 'TokenExpiredError') {
      return res.status(403).json({ message: 'Token expiré.' });
    }

    res.status(500).json({ message: 'Erreur lors de la récupération des détails de l\'utilisateur.', error: error.message });
  }
};
module.exports = { signUp, signIn,getUserDetails };