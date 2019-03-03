import { RECEIVE_USER } from './ACTION_TYPES'

const receiveUser = user => ({ type: RECEIVE_USER, user })

export default receiveUser