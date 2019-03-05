import { LOGIN_ERROR } from '../ACTION_TYPES'

const loginError = error => ({ type: LOGIN_ERROR, error })

export default loginError