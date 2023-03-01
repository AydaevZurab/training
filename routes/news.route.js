const { Router } = require('express');
const { newsController } = require('../controllers/news.controller')

const router = Router();

router.get('/', newsController.getNews);

router.get('/:id', newsController.getNewsById);

router.get('/category/:id', newsController.getNewsByCat)

router.post('/', newsController.addNews);

router.patch('/:id', newsController.updateNews);

router.delete('/:id', newsController.removeNews)

module.exports = router