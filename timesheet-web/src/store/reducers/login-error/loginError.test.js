import loginError from './loginError'
import { RESTORE_LOGIN_ERRORS, LOGIN_ERROR } from '../../actions/ACTION_TYPES';

describe('loginError', () => {

    it('should return the initial state', () => {
        expect(loginError(undefined, {})).toEqual('')
    })

    it('should handle RESTORE_LOGIN_ERRORS', () => {
        expect(loginError({
            loginError: 'Falha ao conectar'
        }, {
            type: RESTORE_LOGIN_ERRORS
        })).toEqual('')
    })

    it('should handle LOGIN_ERROR', () => {
        expect(loginError({
            loginError: 'Falha ao conectar'
        }, {
            type: LOGIN_ERROR,
            error: 'Credenciais inválidas'
        })).toEqual('Credenciais inválidas')
    })

})