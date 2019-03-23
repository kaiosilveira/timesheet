
import { combineReducers } from 'redux'
import fetchMock from 'fetch-mock'

import API_URL from '../../api/API_URL'
import reducer, {
    FETCH_TIMESHEET, fetchTimesheet,
    RESTABLISH_TIMESHEET, restablishTimesheet,
    FETCH_TIMESHEET_SUCCESS,
    registerWorkJourney,
    REGISTER_WORK_JOURNEY_SUCCESS,
} from './duck'
import { createMockStore } from 'redux-logic-test'
import {
    fetchTimesheetLogic,
    restablishTimesheetLogic,
    registerWorkJourneyLogic
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
                { type: FETCH_TIMESHEET_SUCCESS, payload: timesheet },
                { type: "@@router/CALL_HISTORY_METHOD", payload: {args: ['/'], method: "push"} }
            ])
        })

    })

    afterEach(() => fetchMock.reset())

})

describe('registerWorkJourneyLogic', () => {
  
    it('should handle REGISTER_WORK_JOURNEY action', () => {
        
        const period = { _id: 'j3k2jk32', name: 'Março - 2019' }
        const workJourney = { from: 8, to: 18, pause: 1, date: (new Date()).toString(), period: 'ds89ads' }
        const timesheet = [
            { from: 9, to: 18, pause: 1, date: (new Date()).toString(), period: '213j321' },
            { from: 8, to: 18, pause: 1, date: (new Date()).toString(), period: 'ds89ads' },
        ]

        fetchMock.postOnce(`${API_URL}/timesheet/${period._id}`, {
            body: workJourney,
            headers: { 'content-type': 'application/json' }
        })
        
        const store = createMockStore({
            initialState: { currentPeriod: period, timesheet },
            reducer: combineReducers({
                timesheet: reducer,
                currentPeriod: (state = {}, action) => state
            }),
            logic: [registerWorkJourneyLogic]
        })

        store.dispatch(registerWorkJourney(workJourney))

        store.whenComplete(() => {
            expect(store.actions).toEqual([
                { type: REGISTER_WORK_JOURNEY, payload: { workJourney }},
                { type: REGISTER_WORK_JOURNEY_SUCCESS, payload: { workJourney }},
                { type: "@@router/CALL_HISTORY_METHOD", payload: {args: ['/'], method: "push"} }
            ])
        })

    })
})