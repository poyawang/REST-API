const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

// GET /feed/posts
// router.get('/posts', professionalController.getPosts);
router.get('/', professionalController.getPosts);

// POST /feed/post
router.post('/post', professionalController.createPost);

module.exports = router;