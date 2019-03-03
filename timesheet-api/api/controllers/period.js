const { Period } = require('../models'),
    notifyError = require('../../_utils/notifyError');

class PeriodsController {

    async create(req, res, next) {
        try {
            const createdPeriod = await Period.create(req.body);
            res.status(201).json(createdPeriod);
        } catch (ex) {
            console.log(ex);
            res.status(500).json(notifyError('Internal Error'));
        }
    }

    async getCurrent(req, res) {
        try {
            const currentPeriod = (await Period.find({ user: req.params.userId })).pop();

            if(!currentPeriod) {
                res.status(404).json(notifyError('No one period registered'));
                return;
            }

            res.json(currentPeriod);
        } catch (ex) {
            console.log(ex);
            res.status(500).json(notifyError('Internal Error'));
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const newPeriod = req.body;
            const existingPeriod = await Period.findById(id);
            
            if (!existingPeriod) {
                res.status(404).json(notifyError('Period not found'));
                return;
            }

            const updatedPeriod = await Period.findByIdAndUpdate(id, newPeriod);
            
            res.json(updatedPeriod);

        } catch (ex) {
            console.log(ex);
            res.status(500).json(notifyError('Internal error'));
        }
    }

}

module.exports = PeriodsController;