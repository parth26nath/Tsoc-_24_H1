const contentService = require('../services/contentService');

const uploadContent = async (req, res) => {
  const { title, description, files } = req.body;
  const artistId = req.user.id;

  try {
    const result = await contentService.uploadContent(title, description, files, artistId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error uploading content' });
  }
};

module.exports = { uploadContent };
