import { RECEIVE_USER } from '../reducers/mainReducer'

const receiveUser = user => ({ type: RECEIVE_USER, user })

export default receiveUser