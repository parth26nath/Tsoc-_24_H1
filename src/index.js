const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const contentRoutes = require('./routes/contentRoutes');
const tokenRoutes = require('./routes/tokenRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/token', tokenRoutes);

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to TBACKEND ');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
