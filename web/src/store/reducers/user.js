import { RECEIVE_USER } from './mainReducer'

const initialState = {
    name: '',
    username: '',
    hourValue: 0,
    timesheet: []
}

const userReducer = (state = initialState, { type, user }) => {
    switch (type) {
        case RECEIVE_USER:
            return  { ...user }
        default:
            return state
    }
}

export default userReducer