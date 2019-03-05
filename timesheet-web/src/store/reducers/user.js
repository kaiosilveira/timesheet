import { RECEIVE_USER } from '../actions/ACTION_TYPES'

const initialState = {
    name: '',
    username: '',
    hourValue: 0,
    timesheet: []
}

const user = (state = initialState, { type, user }) => {
    switch (type) {
        case RECEIVE_USER:
            return  { ...user }
        default:
            return state
    }
}

export default user