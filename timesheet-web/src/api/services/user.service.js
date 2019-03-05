import API_URL from '../API_URL'
import 'cross-fetch/polyfill'

class UserService {

    get = () => fetch(`${API_URL}/users/5c7c1a3cadd7a477390c13bd`).then(res => res.json())

    login = credentials => fetch(`${API_URL}/auth`, {
        'method': 'POST',
        'Content-Type': 'application/json',
        'body': JSON.stringify(credentials)
    })
    .then(res => {
        if(res.ok) {
            return res.json();
        } else throw new Error('Request rejected')
    })
}

export default UserService