import API_URL from '../API_URL'

class UserService {
    get = () => fetch(`${API_URL}/users/5c7c1a3cadd7a477390c13bd`).then(res => res.json())
}

export default UserService