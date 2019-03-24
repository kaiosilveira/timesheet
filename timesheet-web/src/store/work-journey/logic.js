import { createLogic } from 'redux-logic'
import { push } from 'connected-react-router'

import {
    REGISTER_WORK_JOURNEY_CANCEL,
    REGISTER_WORK_JOURNEY,
    registerWorkJourneySuccess,
    registerWorkJourneyFailed
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

export default [
    registerWorkJourneyLogic
]