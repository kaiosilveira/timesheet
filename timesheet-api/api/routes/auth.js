const express = require('express'),
    router = express.Router(),
    { AuthController } = require('../controllers');

const createRouter = privateKey => {
    const controller = new AuthController(privateKey);
    router.route('/').post(controller.auth);
    return router;
}

module.exports = createRouter;