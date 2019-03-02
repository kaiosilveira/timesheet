const initialState = {
    user: {
        name: '',
        username: '',
        hourValue: 0,
        timesheet: []
    }
}

export const FETCH_USER = 'FETCH_USER'
const mainReducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_USER:
            state.user = {
                name: 'Kaio',
                username: 'kaio',
                hourValue: 55,
                timesheet: [
                    {
                        date: new Date(2019, 2, 1),
                        from: 9.5,
                        to: 19.5,
                        pause: 1
                    },
                    {
                        date: new Date(2019, 1, 2),
                        from: 10.5,
                        to: 21,
                        pause: 1
                    },
                ]
            }
            return state;
        default:
            return state;
    }

}

export default mainReducer