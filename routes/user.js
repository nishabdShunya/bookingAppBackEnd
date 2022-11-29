const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get('/', userController.getUsers);

router.post('/add-user', userController.postAddUser);

router.delete('/:userId', userController.deleteUser);

router.put('/:userId');

module.exports = router;