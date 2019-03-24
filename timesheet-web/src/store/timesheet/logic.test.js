
import { combineReducers } from 'redux'
import fetchMock from 'fetch-mock'

import API_URL from '../../api/API_URL'
import reducer, {
    FETCH_TIMESHEET, FETCH_TIMESHEET_SUCCESS, fetchTimesheet,
    RESTABLISH_TIMESHEET, restablishTimesheet,
} from './duck'
import { createMockStore } from 'redux-logic-test'
import {
    fetchTimesheetLogic,
    restablishTimesheetLogic
} from './logic'

describe('fetchTimesheetLogic', () => {
    
    it('should handle FETCH_TIMESHEET action', () => {

        const period = { _id: 'j3k2jk32', name: 'Março - 2019' }
        const timesheet = [
            { from: 9, to: 18, pause: 1, date: (new Date()).toString(), period: '213j321' },
            { from: 8, to: 18, pause: 1, date: (new Date()).toString(), period: 'ds89ads' },
        ]

        fetchMock.getOnce(`${API_URL}/timesheet/${period._id}`, {
            body: timesheet,
            headers: { 'content-type': 'application/json' }
        })

        const store = createMockStore({
            initialState: { currentPeriod: period },
            reducer: combineReducers({
                timesheet: reducer,
                currentPeriod: (state = {}, action) => state
            }),
            logic: [fetchTimesheetLogic]
        })

        store.dispatch(fetchTimesheet(period._id))

        store.whenComplete(() => {

            expect(store.actions).toEqual([
                { type: FETCH_TIMESHEET, payload: { periodId: period._id } },
                { type: FETCH_TIMESHEET_SUCCESS, payload: timesheet }
            ])

            expect(store.getState().timesheet).toEqual(timesheet)

        })

    })

    afterEach(() => fetchMock.reset())

})

describe('restablishTimesheetLogic', () => {

    it('should handle RESTABLISH_TIMESHEET action', () => {

        const period = { _id: 'j3k2jk32', name: 'Março - 2019' }
        const timesheet = [
            { from: 9, to: 18, pause: 1, date: (new Date()).toString(), period: '213j321' },
            { from: 8, to: 18, pause: 1, date: (new Date()).toString(), period: 'ds89ads' },
        ]

        fetchMock.getOnce(`${API_URL}/timesheet/${period._id}`, {
            body: timesheet,
            headers: { 'content-type': 'application/json' }
        })

        const store = createMockStore({
            initialState: { currentPeriod: period },
            reducer,
            logic: [restablishTimesheetLogic]
        })

        store.dispatch(restablishTimesheet(period._id))

        store.whenComplete(() => {
            expect(store.actions).toEqual([
                { type: RESTABLISH_TIMESHEET, payload: { periodId: period._id } },
                { type: FETCH_TIMESHEET_SUCCESS, payload: timesheet }
            ])
        })

    })

    afterEach(() => fetchMock.reset())

})
