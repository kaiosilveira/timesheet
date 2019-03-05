import loginError from './loginError';
import { LOGIN_ERROR } from '../ACTION_TYPES';

describe('loginError', () => {

    it('should create an action for login errors', () => {
        const error = { error: true, msg: 'falied to login' }
        const expectedAction = { type: LOGIN_ERROR, error }
        expect(loginError(error)).toEqual(expectedAction)
    })

})