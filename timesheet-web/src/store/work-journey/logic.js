import { createLogic } from 'redux-logic'
import { push } from 'connected-react-router'

import {
    REGISTER_WORK_JOURNEY_CANCEL,
    REGISTER_WORK_JOURNEY,
    registerWorkJourneySuccess,
    registerWorkJourneyFailed,
    RESTORE_WORK_JOURNEY_FORM_EDIT,
    restoreWorkJourneyFormEditSuccess,
    restoreWorkJourneyFormEditError
} from './duck'
import TimesheetService from '../../api/services/timesheet.service'

export const registerWorkJourneyLogic = createLogic({

    type: REGISTER_WORK_JOURNEY,

    cancelType: REGISTER_WORK_JOURNEY_CANCEL,

    process({ getState, action }, dispatch, done) {
        const { workJourney } = action.payload
        if (workJourney._id) {
            new TimesheetService(getState().currentPeriod._id).edit(workJourney)
            .then(registered => {
                dispatch(registerWorkJourneySuccess(registered))
                dispatch(push('/'))
            })
            .catch(err => {
                console.log(err)
                dispatch(registerWorkJourneyFailed(err))
            })
            .then(() => done())
        } else {
            new TimesheetService(getState().currentPeriod._id).register(workJourney)
            .then(registered => {
                dispatch(registerWorkJourneySuccess(registered))
                dispatch(push('/'))
            })
            .catch(err => {
                console.log(err)
                dispatch(registerWorkJourneyFailed(err))
            })
            .then(() => done())
        }
        
    }

})

export const restoreEditStateLogic = createLogic({

    type: RESTORE_WORK_JOURNEY_FORM_EDIT,

    latest: true,

    process({ getState, action }, dispatch, done) {

        console.log('called')
        const { workJourneyItemId } = action.payload

        new TimesheetService(getState().currentPeriod._id)
        .getWorkJourneyItem(workJourneyItemId)
        .then(item => dispatch(restoreWorkJourneyFormEditSuccess(item)))
        .catch(err => dispatch(restoreWorkJourneyFormEditError(err)))
        .then(() => done())

    }

})

export default [
    registerWorkJourneyLogic,
    restoreEditStateLogic
]