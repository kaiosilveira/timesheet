import { createMockStore } from 'redux-logic-test'
import fetchMock from 'fetch-mock'

import reducer, { fetchCurrentPeriod, FETCH_CURRENT_PERIOD_SUCCESS, FETCH_CURRENT_PERIOD, restablishCurrentPeriod, RESTABLISH_CURRENT_PERIOD } from './duck'
import { restablishCurrentPeriodLogic, fetchCurrentPeriodLogic } from './logic'
import API_URL from '../../api/API_URL'
import { RESTABLISH_TIMESHEET } from '../timesheet/duck'

describe('period logic', () => {

    it('should handle RESTABLISH_CURRENT_PERIOD', () => {
        
        const user = { _id: 'fuhdu' }
        const initialState = { user }
        const timesheet = [
            { from: 9, to: 18, pause: 1, date: new Date() },
            { from: 9, to: 18, pause: 1, date: new Date() }
        ]
        const period = { _id: 'fsd8sd87s', name: 'Março - 2019', userId: initialState.user._id }

        fetchMock.getOnce(`${API_URL}/periods/${user._id}/current`, period)
        fetchMock.getOnce(`${API_URL}/timesheet/${period._id}`, timesheet)

        const store = createMockStore({
            initialState,
            reducer,
            logic: [restablishCurrentPeriodLogic]
        })

        store.dispatch(restablishCurrentPeriod(user._id))
        store.whenComplete(() => {
            expect(store.actions).toEqual([
                { type: RESTABLISH_CURRENT_PERIOD, payload: { userId: user._id } },
                { type: FETCH_CURRENT_PERIOD_SUCCESS, payload: { period } },
                { type: RESTABLISH_TIMESHEET, payload: { periodId: period._id } }
            ])
        })

    })

    it('should handle FETCH_CURRENT_PERIOD', () => {
        
        const initialState = { user: { _id: 'fuhdu' } }
        const period = { _id: 'fsd8sd87s', name: 'Março - 2019', userId: initialState.user._id }

        const store = createMockStore({
            initialState,
            reducer,
            logic: [fetchCurrentPeriodLogic]
        })

        fetchMock.getOnce(`${API_URL}/periods/${initialState.user._id}/current`, period)
        
        store.dispatch(fetchCurrentPeriod(initialState.user._id))
        store.whenComplete(() => {
            expect(store.actions).toEqual([
                { type: FETCH_CURRENT_PERIOD, payload: { userId: initialState.user._id } },
                { type: FETCH_CURRENT_PERIOD_SUCCESS, payload: { period }},
            ])
        })

    })

    afterEach(() => fetchMock.reset())

})