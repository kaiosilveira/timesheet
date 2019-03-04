import { RECEIVE_CURRENT_PERIOD } from '../ACTION_TYPES'

const receiveCurrentPeriod = period => ({ type: RECEIVE_CURRENT_PERIOD, period })

export default receiveCurrentPeriod