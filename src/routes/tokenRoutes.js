const express = require('express');
const {
  defineToken,
  createToken,
  manageTokens,
  distributeToken,
  viewTransactions,
} = require('../controllers/tokenController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/define', authenticateToken, defineToken);
router.post('/create', authenticateToken, createToken);
router.get('/manage', authenticateToken, manageTokens);
router.post('/distribute', authenticateToken, distributeToken);
router.get('/transactions', authenticateToken, viewTransactions);

module.exports = router;
