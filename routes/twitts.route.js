const { Router } = require('express');

const { twittsController } = require('../controllers/twitts.controller');

const router = Router();

router.get('/', twittsController.getTwitts);
router.get('/:id', twittsController.getTwittsById);
router.post('/', twittsController.addTwitts);
router.delete('/:id', twittsController.removeTwitts);

module.exports = router;