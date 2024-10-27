// controllers/blogPostController.js
const BlogPost = require('../models/postmodels');

// Créer un nouveau post
const createPost = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newPost = new BlogPost({ title, description });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du post.', error: error.message });
  }
};

// Lire tous les posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des posts.', error: error.message });
  }
};

// Lire un post par ID
const getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await BlogPost.findById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé.' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du post.', error: error.message });
  }
};

// Mettre à jour un post
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const updatedPost = await BlogPost.findByIdAndUpdate(id, { title, description }, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post non trouvé.' });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du post.', error: error.message });
  }
};

// Supprimer un post
const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPost = await BlogPost.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post non trouvé.' });
    }
    res.json({ message: 'Post supprimé avec succès.' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du post.', error: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};