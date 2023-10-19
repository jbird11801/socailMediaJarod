const router =  require('express').Router();

const api = require('./api');
const homepageRoutes = require('./homeRoutes.js');

router.use('/api', api);
router.use('/', homepageRoutes);

module.exports = router;