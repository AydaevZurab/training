const { Router } = require('express');

const { usersController } = require('../controllers/users.cotroller')

const router = Router();

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUsersByid);
router.post('/', usersController.addUsers);
router.delete('/:id', usersController.removeUsers);

module.exports = router;