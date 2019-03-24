import { createMockStore } from 'redux-logic-test'
import fetchMock from 'fetch-mock'
import { combineReducers } from 'redux'

import API_URL from '../../api/API_URL'
import reducer, {
    REGISTER_WORK_JOURNEY, REGISTER_WORK_JOURNEY_SUCCESS, registerWorkJourney, restoreWorkJourneyFormEdit, RESTORE_WORK_JOURNEY_FORM_EDIT, RESTORE_WORK_JOURNEY_FORM_EDIT_SUCCESS,
} from './duck'
import { registerWorkJourneyLogic, restoreEditStateLogic } from './logic'

describe('registerWorkJourneyLogic', () => {
  
    it('should register a work journey after REGISTER_WORK_JOURNEY action', () => {
        
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
                currentPeriod: (state = {}) => state
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

    it('should update an existing work journey', () => {
        
        const period = { _id: 'j3k2jk32', name: 'Março - 2019' }
        const workJourney = { _id: '42hj4hj2', from: 8, to: 18, pause: 1, date: (new Date()).toString(), period: 'ds89ads' }
        const timesheet = [
            { from: 9, to: 18, pause: 1, date: (new Date()).toString(), period: '213j321' },
            { from: 8, to: 18, pause: 1, date: (new Date()).toString(), period: 'ds89ads' },
        ]

        fetchMock.putOnce(`${API_URL}/timesheet/${period._id}/workjourney/${workJourney._id}`, {
            body: workJourney,
            headers: { 'content-type': 'application/json' }
        })
        
        const store = createMockStore({
            initialState: { currentPeriod: period, timesheet },
            reducer: combineReducers({
                timesheet: reducer,
                currentPeriod: (state = {}) => state
            }),
            logic: [registerWorkJourneyLogic]
        })

        store.dispatch(registerWorkJourney(workJourney))

        store.whenComplete(() => {
            expect(store.getState()).toEqual({ timesheet, currentPeriod})
            expect(store.actions).toEqual([
                { type: REGISTER_WORK_JOURNEY, payload: { workJourney }},
                { type: REGISTER_WORK_JOURNEY_SUCCESS, payload: { workJourney }},
                { type: "@@router/CALL_HISTORY_METHOD", payload: {args: ['/'], method: "push"} }
            ])
        })
    })
})

describe('restoreEditStateLogic', () => {
  
    it('should restore edit state of an work journey item', () => {
        
        const period = { _id: 'j3k2jk32', name: 'Março - 2019' }
        const id = '42hj4hj2'
        const workJourney = { _id: id, from: 8, to: 18, pause: 1, date: (new Date()).toString(), period: 'ds89ads' }

        const store = createMockStore({
            initialState: {
                currentPeriod: period,
                workJourneyItem: { }
            },
            reducer,
            logic: [restoreEditStateLogic]
        })

        fetchMock.getOnce(`${API_URL}/timesheet/${period._id}/workjourney/${id}`, workJourney)

        store.dispatch(restoreWorkJourneyFormEdit(id))

        store.whenComplete(() => {
            expect(store.actions).toEqual([
                { type: RESTORE_WORK_JOURNEY_FORM_EDIT, payload: { workJourneyItemId: id }},
                { type: RESTORE_WORK_JOURNEY_FORM_EDIT_SUCCESS, payload: { workJourney }}
            ])
        })

    })

})