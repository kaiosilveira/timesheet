import reducer, {
    FETCH_USER, fetchUser,
    RESTABLISH_USER_CONNECTION, restablishUserConnection,
    FETCH_USER_SUCCESS, fetchUserSuccess,
    FETCH_USER_ERROR, fetchUserError,
    LOGIN, login,
    LOGIN_ERROR, loginError,
} from './duck'

describe('user actions', () => {

    it('should create an action to fetch user', () => {
        expect(fetchUser()).toEqual({
            type: FETCH_USER,
            payload: {}
        })
    })

    it('should create an action to restablish user connection', () => {
        const user = { name: 'Kaio silveira', username: 'kaiosilveira', password: '1234' }
        expect(restablishUserConnection(user)).toEqual({
            type: RESTABLISH_USER_CONNECTION,
            payload: { user }
        })
    })

    it('should create an action to receive user after successfuly fetch', () => {
        const user = { name: 'Kaio silveira', username: 'kaiosilveira', password: '1234' }
        expect(fetchUserSuccess(user)).toEqual({
            type: FETCH_USER_SUCCESS,
            payload: { user }
        })
    })

    it('should create an action to notify fetch user error', () => {
        const error = new Error('Network error')
        expect(fetchUserError(error)).toEqual({
            type: FETCH_USER_ERROR,
            payload: error,
            error: true
        })
    })

    it('should create an action to login', () => {
        const credentials = { username: 'kaiosilveira', password: '1234' }
        expect(login(credentials.username, credentials.password)).toEqual({
            type: LOGIN,
            payload: { ...credentials }
        })
    })

    it('should create an action to notify login error', () => {
        const error = new Error('Network error')
        expect(loginError(error)).toEqual({
            type: LOGIN_ERROR,
            payload: error,
            error: true 
        })
    })

})

describe('user reducer', () => {

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({})    
    })

    it('should handle FETCH_USER_SUCCESS', () => {
        const user = { name: 'Kaio silveira', username: 'kaiosilveira', password: '1234' }
        expect(reducer({}, {
            type: FETCH_USER_SUCCESS,
            payload: { user }
        })).toEqual(user)
    })

})