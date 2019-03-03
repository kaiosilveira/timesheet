const express = require('express'),
    router = express.Router(),
    { PeriodsController } = require('../controllers');

const controller = new PeriodsController();

router.route('/').post(controller.create);
router.route('/:id').put(controller.update);
router.route('/:userId/current').get(controller.getCurrent);

module.exports = router;