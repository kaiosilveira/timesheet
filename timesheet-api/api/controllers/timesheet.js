const { WorkJourney } = require('../models'),
    notifyError = require('../../_utils/notifyError');

class TimesheetController {

    async list(req, res) {

        try {
            const workJouneys = await WorkJourney.find({
                period: req.params.periodId
            });
    
            res.json(workJouneys);
        } catch (ex) {
            res.status(500).json(notifyError('Internal Error'));
        }

    }

    async registerWorkJourney(req, res) {
        try {

            const workJourney = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

            if (!workJourney) {
                res.status(400).json(notifyError('Bad request. Object is empty.'));
                return;
            }

            const createdWorkJourney = await WorkJourney.create(workJourney);
            res.status(201).json(createdWorkJourney);
        } catch (ex) {
            console.log(ex);
            res.status(500).json(notifyError('Internal Error'));
        }
    }
}

module.exports = TimesheetController;