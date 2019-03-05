import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import thunkMiddleware from 'redux-thunk'

import { APPEND_WORK_JOURNEY } from '../ACTION_TYPES'
import registerWorkJourney from './registerWorkJourney'
import API_URL from '../../../api/API_URL'

describe('registerWorkJourney', () => {

    const mockStore = configureMockStore([thunkMiddleware])

    afterEach(() => fetchMock.restore())

    it('should create an action to register a work journey', () => {

        const periodId = '438u248u32'
        const date = new Date()
        const workJourney = {
            _id: '432432',
            from: 9,
            to: 18,
            pause: 1,
            date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
            period: periodId
        }

        fetchMock.postOnce(`${API_URL}/timesheet/${periodId}`, {
            body: workJourney,
            headers: {
                'content-type': 'application/json'
            }
        })

        const expectedActions = [ { type: APPEND_WORK_JOURNEY, workJourney } ]

        const store = mockStore({ timesheet: [], currentPeriod: { _id: periodId } })

        return store.dispatch(registerWorkJourney(workJourney)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })

    })

})