const { Router } = require('express');

const router = Router();

router.use('/categories', require('./categories.route'));
router.use('/news', require('./news.route'));
router.use('/twitts', require('./twitts.route'));
router.use('/users', require('./users.route'));

module.exports = router;