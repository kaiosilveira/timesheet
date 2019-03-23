import reducer, {
    FETCH_TIMESHEET_SUCCESS, fetchTimesheetSuccess,
    FETCH_TIMESHEET, fetchTimesheet,
    FETCH_TIMESHEET_FAILED, fetchTimesheetFailed,
    REGISTER_WORK_JOURNEY, registerWorkJourney,
    REGISTER_WORK_JOURNEY_SUCCESS, registerWorkJourneySuccess,
    REGISTER_WORK_JOURNEY_FAILED, registerWorkJourneyFailed
} from './duck'

describe('timesheet actions', () => {
    
    it('should create a fetch timesheet action', () => {
        const periodId = '8uf8uada'
        expect(fetchTimesheet(periodId)).toEqual({
            type: FETCH_TIMESHEET,
            payload: { periodId }
        })
    })

    it('should create a fetch timesheet success action', () => {
        const payload = [{ from: 9, to: 18, pause: 1, date: new Date() }]
        expect(fetchTimesheetSuccess(payload)).toEqual({
            type: FETCH_TIMESHEET_SUCCESS,
            payload
        })
    })

    it('should create a fetch timesheet failed action', () => {
        const error = new Error('Network error')
        expect(fetchTimesheetFailed(error)).toEqual({
            type: FETCH_TIMESHEET_FAILED,
            payload: error,
            error: true
        })
    })

    it('should create an action to register a work journey', () => {
        const workJourney = { from: 9, to: 18, pause: 1, date: new Date() }
        expect(registerWorkJourney(workJourney)).toEqual({
            type: REGISTER_WORK_JOURNEY,
            payload: { workJourney }
        })
    })

    it('should create an action to append a work journey', () => {
        const workJourney = { from: 9, to: 18, pause: 1, date: new Date() }
        expect(registerWorkJourneySuccess(workJourney)).toEqual({
            type: REGISTER_WORK_JOURNEY_SUCCESS,
            payload: { workJourney }
        })
    })

    it('should create an action to notify if register work journey failed', () => {
        const error = new Error('Network Error')
        expect(registerWorkJourneyFailed(error)).toEqual({
            type: REGISTER_WORK_JOURNEY_FAILED,
            payload: error,
            error: true
        })
    })
})

describe('timesheet reducer', () => {
    
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual([])
    })

    it('should handle RECEIVE_TIMESHEET_SUCCESS actions', () => {

        const payload = [{ from: 9, to: 18, pause: 1, date: new Date() }]
        
        expect(reducer({}, {
            type: FETCH_TIMESHEET_SUCCESS,
            payload
        })).toEqual(payload)
    
    })

    it('should append a work journey', () => {
        
        const timesheet = [{ from: 9, to: 18, pause: 1, date: new Date() }]
        const workJourney = { from: 9, to: 18, pause: 1, date: new Date() }

        expect(reducer(timesheet, {
            type: REGISTER_WORK_JOURNEY_SUCCESS,
            payload: { workJourney }
        })).toEqual([...timesheet, workJourney])
    
    })

})