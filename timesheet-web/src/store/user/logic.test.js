import fetchMock from 'fetch-mock'
import { createMockStore } from 'redux-logic-test'

import reducer, {
    LOGIN, login,
    LOGIN_ERROR,
    RESTABLISH_USER_CONNECTION, restablishUserConnection,
    FETCH_USER_SUCCESS
} from './duck'
import { loginLogic, restablishConnectionLogic } from './logic'
import API_URL from '../../api/API_URL'
import { RESTABLISH_CURRENT_PERIOD } from '../period/duck'

describe('login logic', () => {

    it('should handle login logic', () => {
        const store = createMockStore({
            initialState: {},
            reducer,
            logic: [loginLogic]
        })

        const username = 'kaiosilveira'
        const password = '1234'

        const payload = { username, password }
        const user = {
            "username": "kaiosilveira",
            "name": "Kaio Silveira",
            "_id": "5c7c1a3cadd7a477390c13bd",
            "hourValue": 55,
            "iat": 1553343797
        }
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImthaW9zaWx2ZWlyYSIsIm5hbWUiOiJLYWlvIFNpbHZlaXJhIiwiX2lkIjoiNWM3YzFhM2NhZGQ3YTQ3NzM5MGMxM2JkIiwiaG91clZhbHVlIjo1NSwiaWF0IjoxNTUzMzQzNzk3fQ.9NVEbFQTd4C2HP7I6mkK1-GPqfjVuxYGM1s-bVbicRs'

        fetchMock.postOnce(`${API_URL}/auth`, { token })

        store.dispatch(login(username, password))

        store.whenComplete(() => {

            expect(store.actions).toEqual([
                { type: LOGIN, payload },
                { type: RESTABLISH_USER_CONNECTION, payload: { user } }
            ])

        })
    })

    it('should emit error action if something fail', () => {
        const store = createMockStore({
            initialState: {},
            reducer,
            logic: [loginLogic]
        })

        const username = 'kaiosilveira'
        const password = '1234'
        const payload = { username, password }
        const error = new Error('Internal Server Error')

        fetchMock.postOnce(`${API_URL}/auth`, {
            status: 500,
            statusText: 'Internal Server Error',
            data: error
        })

        store.dispatch(login(username, password))

        store.whenComplete(() => {

            expect(store.actions).toEqual([
                { type: LOGIN, payload },
                { type: LOGIN_ERROR, payload: { error } }
            ])

        })
    })

    afterEach(() => fetchMock.reset())

})

describe('restablish connection logic', () => {

    it('should handle restablish connection logic', () => {

        const store = createMockStore({
            initialState: {},
            reducer,
            logic: [restablishConnectionLogic]
        })

        const period = { _id: 'fds98f9ds', name: 'Março - 2019' }
        const user = {
            username: "kaiosilveira",
            name: "Kaio Silveira",
            _id: "5c7c1a3cadd7a477390c13bd",
            hourValue: 55,
            iat: 1553343797
        }

        fetchMock.getOnce(`${API_URL}/periods/${user._id}/current`, {
            status: 200,
            data: period
        })

        fetchMock.getOnce(`${API_URL}/timesheet/${period._id}`, {
            status: 200,
            data: period
        })

        store.dispatch(restablishUserConnection(user))

        store.whenComplete(() => {
            expect(store.actions).toEqual([
                { type: RESTABLISH_USER_CONNECTION, payload: { user } },
                { type: FETCH_USER_SUCCESS, payload: { user }},
                { type: RESTABLISH_CURRENT_PERIOD, payload: { userId: user._id }},
            ])
        })

    })

    afterEach(() => fetchMock.reset())

})
