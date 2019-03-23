import { createActions, handleActions } from 'redux-actions'

export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR'
export const RESTABLISH_USER_CONNECTION = 'RESTABLISH_USER_CONNECTION'
export const RESTABLISH_USER_CONNECTION_CANCEL = 'RESTABLISH_USER_CONNECTION_CANCEL'
export const LOGIN = 'LOGIN'
export const LOGIN_CANCEL = 'LOGIN_CANCEL'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const {
    fetchUser,
    fetchUserSuccess,
    restablishUserConnection,
    fetchUserError,
    login,
    loginError
} = createActions({
    FETCH_USER: () => ({}),
    FETCH_USER_SUCCESS: user => ({ user }),
    RESTABLISH_USER_CONNECTION: user => ({ user }),
    FETCH_USER_ERROR: error => ({ error }),
    LOGIN: (username, password) => ({ username, password }),
    LOGIN_ERROR: error => ({ error })
})

const reducer = handleActions({
    FETCH_USER_SUCCESS: (state, action) => ({ ...action.payload.user }),
    RESTABLISH_USER_CONNECTION: (state, action) => ({ ...action.payload.user }),
    FETCH_USER_ERROR: state => ({ ...state })
}, {})

export default reducer