import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import API_URL from '../../../api/API_URL';
import { RECEIVE_TIMESHEET } from '../ACTION_TYPES';
import fetchTimesheet from './fetchTimesheet';

describe('fetchTimesheet', () => {

    const mockStore = configureMockStore([thunkMiddleware])
    afterEach(() => fetchMock.restore())

    it('should fetch timesheet data', () => {

        const period = { _id: 'j3k2jk32', name: 'Março - 2019' }
        const timesheet = [
            { from: 9, to: 18, pause: 1, date: (new Date()).toString(), period: '213j321' },
            { from: 8, to: 18, pause: 1, date: (new Date()).toString(), period: 'ds89ads' },
        ]

        fetchMock.getOnce(`${API_URL}/timesheet/${period._id}`, {
            body: timesheet,
            headers: { 'content-type': 'application/json' }
        })

        const store = mockStore({ timesheet: [] })
        const expectedActions = [{ type: RECEIVE_TIMESHEET, timesheet }]

        store.dispatch(fetchTimesheet(period)).then(() => {
            expect(expectedActions).toEqual(store.getActions())
        })

    })

})