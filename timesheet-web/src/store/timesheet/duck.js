import { handleActions, createActions } from 'redux-actions'

export const FETCH_TIMESHEET = 'FETCH_TIMESHEET'
export const FETCH_TIMESHEET_CANCEL = 'FETCH_TIMESHEET_CANCEL'
export const FETCH_TIMESHEET_SUCCESS = 'FETCH_TIMESHEET_SUCCESS'
export const FETCH_TIMESHEET_FAILED = 'FETCH_TIMESHEET_FAILED'
export const RESTABLISH_TIMESHEET = 'RESTABLISH_TIMESHEET'
export const RESTABLISH_TIMESHEET_CANCEL = 'RESTABLISH_TIMESHEET_CANCEL'
export const REGISTER_WORK_JOURNEY = 'REGISTER_WORK_JOURNEY'
export const REGISTER_WORK_JOURNEY_SUCCESS = 'REGISTER_WORK_JOURNEY_SUCCESS'
export const REGISTER_WORK_JOURNEY_FAILED = 'REGISTER_WORK_JOURNEY_FAILED'
export const REGISTER_WORK_JOURNEY_CANCEL = 'REGISTER_WORK_JOURNEY_CANCEL'

export const {
    restablishTimesheet,
    fetchTimesheet,
    fetchTimesheetSuccess,
    fetchTimesheetFailed,
    registerWorkJourney,
    registerWorkJourneySuccess,
    registerWorkJourneyFailed
} = createActions({
    RESTABLISH_TIMESHEET: periodId => ({ periodId }),
    FETCH_TIMESHEET: periodId => ({ periodId }),
    FETCH_TIMESHEET_SUCCESS: timesheet => timesheet,
    FETCH_TIMESHEET_FAILED: error => error,
    REGISTER_WORK_JOURNEY: workJourney => ({ workJourney }),
    REGISTER_WORK_JOURNEY_SUCCESS: workJourney => ({ workJourney }),
    REGISTER_WORK_JOURNEY_FAILED: workJourney => ({ workJourney }),
})

const reducer = handleActions({
    FETCH_TIMESHEET_SUCCESS: (state, action) => [...action.payload],
    FETCH_TIMESHEET_FAILED: state => [...state],
    REGISTER_WORK_JOURNEY_SUCCESS: (state, action) => [...state, action.payload.workJourney],
    REGISTER_WORK_JOURNEY_FAILED: state => [...state]
}, [])

export default reducer