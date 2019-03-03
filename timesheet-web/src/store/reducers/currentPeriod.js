import { RECEIVE_CURRENT_PERIOD } from '../actions/ACTION_TYPES'

const currentPeriod = (state = {}, { type, period }) => {
    switch (type) {
        case RECEIVE_CURRENT_PERIOD:
            return { ...period }
        default:
            return state
    }
}

export default currentPeriod