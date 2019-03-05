import { RESTORE_LOGIN_ERRORS } from '../ACTION_TYPES'
import restoreLoginErrors from './restoreLoginErrors'

describe('restoreLoginErrors', () => {

    it('should create an action to restore login errors', () => {
        const expectedAction = { type: RESTORE_LOGIN_ERRORS }
        expect(restoreLoginErrors()).toEqual(expectedAction)
    })

})