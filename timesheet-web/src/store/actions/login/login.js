import UserService from '../../../api/services/user.service'
import loginError from '../login-error/loginError'
import receiveUser from '../receive-user/receiveUser'
import fetchCurrentPeriod from '../fetch-current-period/fetchCurrentPeriod'
import fetchTimesheet from '../fetch-timesheet/fetchTimesheet'
import isAuthorized from '../is-authorized/isAuthorized'
import decode from 'jwt-decode'

const login = (username, password) => (dispatch, getState) => new UserService()
    .login({ username, password })
    .then(
        result => {
            try {
                localStorage.setItem('token', result.token)
                const user = decode(result.token)

                dispatch(isAuthorized(true))
                dispatch(receiveUser(user))
                dispatch(fetchCurrentPeriod(user._id))
                .then(() => dispatch(fetchTimesheet(getState().currentPeriod)))
            } catch (ex) {
                throw ex
            }
        }
    )
    .catch(err => dispatch(loginError(err)))

export default login