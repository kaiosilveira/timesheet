import { handleActions, createActions } from 'redux-actions'

export const FETCH_TIMESHEET = 'FETCH_TIMESHEET'
export const FETCH_TIMESHEET_CANCEL = 'FETCH_TIMESHEET_CANCEL'
export const FETCH_TIMESHEET_SUCCESS = 'FETCH_TIMESHEET_SUCCESS'
export const FETCH_TIMESHEET_FAILED = 'FETCH_TIMESHEET_FAILED'
export const RESTABLISH_TIMESHEET = 'RESTABLISH_TIMESHEET'
export const RESTABLISH_TIMESHEET_CANCEL = 'RESTABLISH_TIMESHEET_CANCEL'
export const APPEND_WORK_JOURNEY = 'APPEND_WORK_JOURNEY'

export const {
    restablishTimesheet,
    fetchTimesheet,
    fetchTimesheetSuccess,
    fetchTimesheetFailed,
    appendWorkJourney
} = createActions({
    RESTABLISH_TIMESHEET: periodId => ({ periodId }),
    FETCH_TIMESHEET: periodId => ({ periodId }),
    FETCH_TIMESHEET_SUCCESS: timesheet => timesheet,
    FETCH_TIMESHEET_FAILED: error => error,
    APPEND_WORK_JOURNEY: workJourney => ({ workJourney })
})

const reducer = handleActions({
    FETCH_TIMESHEET_SUCCESS: (state, action) => [...action.payload],
    FETCH_TIMESHEET_FAILED: state => [...state],
    APPEND_WORK_JOURNEY: (state, action) => [...state, action.payload.workJourney],
}, [])

export default reducer