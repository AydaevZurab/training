const { Router } = require('express');
const { newsController } = require('../controllers/news.controller')

const router = Router();

router.get('/', newsController.getNews);

router.get('/:id', newsController.getNewsById);

router.get('/:id/cats', newsController.getNewsByIdAndCats);

router.get('/:newsId/cats/:catsId', newsController.getNewsByIdAndCatsById);

router.post('/', newsController.addNews);

module.exports = router