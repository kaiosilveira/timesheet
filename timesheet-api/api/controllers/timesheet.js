const { WorkJourney } = require('../models'),
    notifyError = require('../../_utils/notifyError'),
    ObjectId = require('mongoose').Types.ObjectId;

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

            const workJourney = req.body;

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

    async editWorkJourney(req, res) {
        try {

            const workJourney = req.body;
            const id = req.params.workJourneyId

            if (!workJourney || !id) {
                res.status(400).json(notifyError('Bad request. Object is empty.'));
                return;
            }

            const updatedWorkJourney = await WorkJourney.findByIdAndUpdate(ObjectId(id), workJourney);
            res.status(201).json(updatedWorkJourney);
        } catch (ex) {
            console.log(ex);
            res.status(500).json(notifyError('Internal Error'));
        }
    }

    async getWorkJourney(req, res) {

        const id = req.params.workJourneyId;

        try {

            if (!id) {
                res.status(400).json({ error: true, msg: 'invalid identifier' });
                return;
            }
    
            const workJourney = await WorkJourney.findById(ObjectId(id));
            res.json(workJourney);
            
        } catch (ex) {
            console.log(ex);
            res.status(500).json(notifyError('Internal Error'));
        }
    }
}

module.exports = TimesheetController;