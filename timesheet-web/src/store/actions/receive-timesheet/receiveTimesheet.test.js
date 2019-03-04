import { RECEIVE_TIMESHEET } from '../ACTION_TYPES';
import receiveTimesheet from './receiveTimesheet';

describe('receiveTimesheet', () => {

    it('should create an action to receive timesheet data', () => {
        const timesheet = [{ from: 9, to: 18, pause: 1, date: new Date(), period: '432432' }]
        const expectedAction = { type: RECEIVE_TIMESHEET, timesheet }
        expect(receiveTimesheet(timesheet)).toEqual(expectedAction)
    })

})