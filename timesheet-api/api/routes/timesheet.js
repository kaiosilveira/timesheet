const express = require('express'),
    router = express.Router(),
    { TimesheetController } = require('../controllers');

const controller = new TimesheetController();

router.route('/:periodId')
    .get(controller.list)
    .post(controller.registerWorkJourney);

module.exports = router;