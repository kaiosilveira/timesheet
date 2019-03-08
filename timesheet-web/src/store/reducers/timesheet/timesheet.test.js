import timesheet from './timesheet';
import { APPEND_WORK_JOURNEY, RECEIVE_TIMESHEET } from '../../actions/ACTION_TYPES';

describe('timesheet reducer', () => {

    it('should return the initial state', () => {
        expect(timesheet(undefined, {})).toEqual([])
    })

    it('should handle APPEND_WORK_JOURNEY', () => {
        
        const workJourney = {
            from: 9,
            to: 18,
            pause: 1,
            date: new Date(),
            period: '2ij432ij'
        }

        expect(timesheet([], {
            type: APPEND_WORK_JOURNEY,
            workJourney
        })).toEqual([workJourney])

    })

    it('should handle RECEIVE_TIMESHEET', () => {
        const items = [{
            from: 9,
            to: 18,
            pause: 1,
            date: new Date(),
            period: '2ij432ij'
        }]

        expect(timesheet([], {
            type: RECEIVE_TIMESHEET, timesheet: items
        })).toEqual(items)

    })

})