import receiveUser from '../actions/receiveUser'
import UserService from '../../api/user.service'

const fetchUser = () => dispatch => new UserService()
    .get()
    .then(user => dispatch(receiveUser(user)))

export default fetchUser