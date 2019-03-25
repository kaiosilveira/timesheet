const express = require('express'),
    router = express.Router(),
    { TimesheetController } = require('../controllers');

const controller = new TimesheetController();

router.route('/:periodId')
    .get(controller.list)
    .post(controller.registerWorkJourney);

router.route('/:periodId/workjourney/:workJourneyId')
    .put(controller.editWorkJourney)
    .get(controller.getWorkJourney);

module.exports = router;