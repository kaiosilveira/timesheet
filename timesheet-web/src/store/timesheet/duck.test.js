import reducer, {
    FETCH_TIMESHEET_SUCCESS, fetchTimesheetSuccess,
    FETCH_TIMESHEET, fetchTimesheet,
    FETCH_TIMESHEET_FAILED, fetchTimesheetFailed,
    APPEND_WORK_JOURNEY,
    appendWorkJourney
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

    it('should create an action to append a work journey', () => {
        const workJourney = { from: 9, to: 18, pause: 1, date: new Date() }
        expect(appendWorkJourney(workJourney)).toEqual({
            type: APPEND_WORK_JOURNEY,
            payload: { workJourney }
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
            type: APPEND_WORK_JOURNEY,
            payload: { workJourney }
        })).toEqual([...timesheet, workJourney])
    
    })

})