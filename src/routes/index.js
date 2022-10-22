const express = require('express');

const router = express.Router();
const articleRoutes = require('./article');

router.get('/', (req, res) => {
  res.status(404).json({ message: 'API Not Found' });
});
router.use('/article', articleRoutes);
module.exports = router;
