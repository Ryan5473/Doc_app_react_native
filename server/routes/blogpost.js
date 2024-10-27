// routes/blogPosts.js
const express = require('express');
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} = require('../controllers/postController');

const router = express.Router();

// Route pour créer un post
router.post('/', createPost);

// Route pour obtenir tous les posts
router.get('/', getAllPosts);

// Route pour obtenir un post par ID
router.get('/:id', getPostById);

// Route pour mettre à jour un post
router.put('/:id', updatePost);

// Route pour supprimer un post
router.delete('/:id', deletePost);

module.exports = router;