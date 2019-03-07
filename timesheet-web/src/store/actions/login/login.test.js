import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import login from './login'
import configureMockStore from 'redux-mock-store'
import API_URL from '../../../api/API_URL'
import { RECEIVE_USER, LOGIN_ERROR, IS_AUTHORIZED, FETCH_CURRENT_PERIOD, FETCH_TIMESHEET } from '../ACTION_TYPES'
import decode from 'jwt-decode'

describe('login action', () => {

    const middlwares = [thunk]
    const mockStore = configureMockStore(middlwares)

    let credentials

    beforeEach(() => {
        credentials = { username: 'test', password: 'test' }
        fetchMock.reset()
    })

    afterEach(() => fetchMock.reset())

    it('should login an user', () => {

        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImthaW9zaWx2ZWlyYSIsIm5hbWUiOiJLYWlvIFNpbHZlaXJhIiwiX2lkIjoiNWM3YzFhM2NhZGQ3YTQ3NzM5MGMxM2JkIiwiaG91clZhbHVlIjo1NSwiaWF0IjoxNTUxNzk4Njk1fQ.86y6roesVhvhHGYflTcHFfq282R4mTnkZwaPpG_HLpU'

        const user = decode(token)

        fetchMock.postOnce(`${API_URL}/auth`, {
            body: { token },
            headers: { 'content-type': 'application/json' }
        })

        fetchMock.getOnce(`${API_URL}/periods/${user._id}/current`, {
            body: [],
            headers: { 'content-type': 'application/json' }
        })

        const store = mockStore({ user: {} })
        const expectedActions = [
        
            { type: IS_AUTHORIZED, isAuthorized: true },
            { payload: { args: ['/'], method: 'push'}, type: '@@router/CALL_HISTORY_METHOD' },
            { type: RECEIVE_USER, user }
        ]
        
        return store.dispatch(login(credentials)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })

    })

    it('should emit an action to notify error if login failed', () => {
        
        fetchMock.postOnce(`${API_URL}/auth`, { msg: 'Internal Error', status: 500 })

        const store = mockStore({ user: [], loginError: '' })
        const expectedActions = [{ type: LOGIN_ERROR, error: 'Credenciais inválidas' }]

        return store.dispatch(login(credentials)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})