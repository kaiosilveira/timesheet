const express = require('express'), 
    router = express.Router(),
    { UserController } = require('../controllers');

const userController = new UserController();

router.route('/').get(userController.list);
router.route('/:id').get(userController.get);

module.exports = router;