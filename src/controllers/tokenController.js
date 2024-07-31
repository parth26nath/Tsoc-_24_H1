const tokenService = require('../services/tokenService');

const defineToken = async (req, res) => {
  const { contentId, nftName, nftSymbol, totalSupply, additionalFeatures } = req.body;

  try {
    const result = await tokenService.defineToken(contentId, nftName, nftSymbol, totalSupply, additionalFeatures);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error defining token' });
  }
};

const createToken = async (req, res) => {
  const { contentId, tokenId } = req.body;

  try {
    const result = await tokenService.createToken(contentId, tokenId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error creating token' });
  }
};

const manageTokens = async (req, res) => {
  const artistId = req.user.id;

  try {
    const result = await tokenService.manageTokens(artistId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving tokens' });
  }
};

const distributeToken = async (req, res) => {
  const { tokenId, recipientAddress, amount } = req.body;

  try {
    const result = await tokenService.distributeToken(tokenId, recipientAddress, amount);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error distributing tokens' });
  }
};

const viewTransactions = async (req, res) => {
  const { tokenId } = req.query;

  try {
    const result = await tokenService.viewTransactions(tokenId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving transactions' });
  }
};

module.exports = { defineToken, createToken, manageTokens, distributeToken, viewTransactions };
