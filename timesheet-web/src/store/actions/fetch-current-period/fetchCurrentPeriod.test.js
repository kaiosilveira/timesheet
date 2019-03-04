import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import fetchMock from 'fetch-mock'

import fetchCurrentPeriod from './fetchCurrentPeriod'
import { RECEIVE_CURRENT_PERIOD } from '../ACTION_TYPES'
import API_URL from '../../../api/API_URL'

describe('fetchCurrentPeriod', () => {

    const mockStore = configureMockStore([thunkMiddleware])
    
    afterEach(() => fetchMock.restore())

    it('should fetch the current period', () => {

        const userId = '3242352af324'
        const period = { name: 'Março - 2019' }

        fetchMock.getOnce(`${API_URL}/periods/${userId}/current`, {
            body: period,
            headers: { 'content-type': 'application/json' }
        })

        const store = mockStore({ user: { _id: userId, currentPeriod: {} } })
        const expectedActions = [{ type: RECEIVE_CURRENT_PERIOD, period }]

        return store.dispatch(fetchCurrentPeriod(userId)).then(() => {
            expect(expectedActions).toEqual(store.getActions())
        })

    })

})