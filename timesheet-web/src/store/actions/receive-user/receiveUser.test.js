import { RECEIVE_USER } from '../ACTION_TYPES'
import receiveUser from './receiveUser'

describe('receiveUser', () => {

    it('should create an action to receive an user', () => {
        const user = { name: 'Kaio Silveira', username: 'kaiosilveira' }
        const expectedAction = { type: RECEIVE_USER, user }
        expect(receiveUser(user)).toEqual(expectedAction)
    })

})