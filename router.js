const router = require('express').Router();
router.use('/users', require('./controllers'));
module.exports = router;