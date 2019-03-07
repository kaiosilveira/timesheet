import UserService from '../../../api/services/user.service'
import loginError from '../login-error/loginError'
import receiveUser from '../receive-user/receiveUser'
import fetchCurrentPeriod from '../fetch-current-period/fetchCurrentPeriod'
import fetchTimesheet from '../fetch-timesheet/fetchTimesheet'
import isAuthorized from '../is-authorized/isAuthorized'
import decode from 'jwt-decode'
import { push } from 'connected-react-router';

const login = (username, password) => (dispatch, getState) => new UserService()
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

                dispatch(isAuthorized(true))
                dispatch(push('/'))
                dispatch(receiveUser(user))
                dispatch(fetchCurrentPeriod(user._id))
                .then(() => dispatch(fetchTimesheet(getState().currentPeriod._id)))

            } catch (ex) {
                throw ex
            }
        }
    )
    .catch(err => {
        dispatch(loginError(err))
        throw err
    })

export default login