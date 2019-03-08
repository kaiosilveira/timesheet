import user from './user';
import { RECEIVE_USER } from '../../actions/ACTION_TYPES';

describe('user reducer', () => {

    it('should return the initial state', () => {
        expect(user(undefined, {})).toEqual({
            name: '',
            username: '',
            hourValue: 0,
            timesheet: []
        })
    })

    it('should handle RECEIVE_USER', () => {
        
        const u = {
            name: '',
            username: '',
            hourValue: 0,
            timesheet: []
        }

        expect(user(undefined, {
            type: RECEIVE_USER,
            user: u
        })).toEqual(u)

    })

})