import { createLogic } from 'redux-logic'
import { push } from 'connected-react-router'

import TimesheetService from '../../api/services/timesheet.service'
import {
    FETCH_TIMESHEET_CANCEL,
    FETCH_TIMESHEET,
    fetchTimesheetSuccess,
    fetchTimesheetFailed,
    RESTABLISH_TIMESHEET,
    RESTABLISH_TIMESHEET_CANCEL,
    REGISTER_WORK_JOURNEY,
    REGISTER_WORK_JOURNEY_CANCEL,
    registerWorkJourneySuccess,
    registerWorkJourneyFailed,
} from './duck'

export const restablishTimesheetLogic = createLogic({

    type: RESTABLISH_TIMESHEET,

    cancelType: RESTABLISH_TIMESHEET_CANCEL,

    latest: true,

    process({ action }, dispatch, done) {

        new TimesheetService(action.payload.periodId)
        .list()
        .then(timesheet => {
            dispatch(fetchTimesheetSuccess(timesheet))
            if (window.location.pathname === 'login') {
                dispatch(push('/'))
            }
        })
        .catch(err => {
            console.log(err)
            dispatch(fetchTimesheetFailed(err))
        })
        .then(() => done())
    }

})

export const fetchTimesheetLogic = createLogic({

    type: FETCH_TIMESHEET,

    cancelType: FETCH_TIMESHEET_CANCEL,

    latest: true,

    process({ action }, dispatch, done) {
        new TimesheetService(action.payload.periodId)
        .list()
        .then(timesheet => dispatch(fetchTimesheetSuccess(timesheet)))
        .catch(err => {
            console.log(err)
            dispatch(fetchTimesheetFailed(err))
        })
        .then(() => done())
    }

})

export const registerWorkJourneyLogic = createLogic({

    type: REGISTER_WORK_JOURNEY,

    cancelType: REGISTER_WORK_JOURNEY_CANCEL,

    process({ getState, action }, dispatch, done) {

        new TimesheetService(getState().currentPeriod._id)
        .register(action.payload.workJourney)
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

})

export default [fetchTimesheetLogic, restablishTimesheetLogic, registerWorkJourneyLogic]