const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./db');
require('dotenv').config();
const contactRoutes = require('./routes');
const app = express();
const PORT = process.env.PORT || 8081;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/contact', contactRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
