const { Router } = require('express');
const { categoriesController } = require('../controllers/categories.controller');

const router = Router();

router.get('/', categoriesController.getCats);

router.post('/', categoriesController.addcats);

module.exports = router