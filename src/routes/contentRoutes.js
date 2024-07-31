const express = require('express');
const { uploadContent } = require('../controllers/contentController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/upload', authenticateToken, uploadContent);

module.exports = router;
