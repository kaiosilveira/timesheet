import { createLogic } from 'redux-logic'
import { restablishCurrentPeriod } from '../period/duck'
import { fetchTimesheet } from '../timesheet/duck'
import { push } from 'connected-react-router'
import {
    fetchUserSuccess,
    loginError,
    LOGIN,
    LOGIN_CANCEL,
    RESTABLISH_USER_CONNECTION,
    RESTABLISH_USER_CONNECTION_CANCEL,
    restablishUserConnection,
} from './duck'
import UserService from '../../api/services/user.service'
import decode from 'jwt-decode'

export const loginLogic = createLogic({

    type: LOGIN,

    cancelType: LOGIN_CANCEL, 

    latest: true,

    process({ getState, action }, dispatch, done) {

        const { username, password } = action.payload

        new UserService()
        .login({ username, password })
        .then(
            result => {

                if (!result || !result.token) {
                    dispatch(loginError('Credenciais inválidas'))
                    return
                }

                try {

                    localStorage.setItem('token', result.token)
                    const user = decode(result.token)

                    dispatch(push('/'))
                    dispatch(restablishUserConnection(user))

                } catch (ex) {
                    throw ex
                }
            }
        )
        .catch(err => {
            console.log(err)
            dispatch(loginError(err))
            throw err
        })

    }
})

export const restablishConnectionLogic = createLogic({

    type: RESTABLISH_USER_CONNECTION,

    cancelType: RESTABLISH_USER_CONNECTION_CANCEL,

    process({ action }, dispatch, done) {

        const { user } = action.payload

        dispatch(fetchUserSuccess(user))
        dispatch(restablishCurrentPeriod(user._id))

        done()
    }

})

export default [
    restablishConnectionLogic,
    loginLogic
]