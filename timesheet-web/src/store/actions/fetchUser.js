import receiveUser from '../actions/receiveUser'
import UserService from '../../api/services/user.service'

const fetchUser = () => dispatch => new UserService()
    .get()
    .then(user => dispatch(receiveUser(user)))

export default fetchUser