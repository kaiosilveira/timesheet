import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchUser from './fetchUser';
import { RECEIVE_USER } from '../ACTION_TYPES'
import API_URL from '../../../api/API_URL'

describe('fetchUser', () => {


    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)

    afterEach(() => fetchMock.restore())

    it('should fetch user', () => {

        const user = { name: `kaio Silveira`, _id: '5c7c1a3cadd7a477390c13bd' }
        const store = mockStore({ user: {} })

        fetchMock.getOnce(`${API_URL}/users/5c7c1a3cadd7a477390c13bd`, {
            body: user,
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions = [{ type: RECEIVE_USER, user }]
        store.dispatch(fetchUser()).then(() => {
            expect(expectedActions).toEqual(store.getActions())
        })

    })

})