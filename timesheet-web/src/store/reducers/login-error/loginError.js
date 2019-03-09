import { LOGIN_ERROR, RESTORE_LOGIN_ERRORS } from '../../actions/ACTION_TYPES'

const loginError = (state = '', { type, error }) => {
    switch (type) {
        case RESTORE_LOGIN_ERRORS:
            return ''
        case LOGIN_ERROR:
            return error
        default:
            return state
    }
}

export default loginError