const authService = require('../services/authService');

const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await authService.register(email, password);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: 'Email already in use' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await authService.login(email, password);
    res.json(result);
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};

module.exports = { register, login };
