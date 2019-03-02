const user = {
    name: 'Kaio',
    username: 'kaio',
    hourValue: 25
}

class UserService {
    get() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(user)
            }, 50);
        })
    }
}

export default UserService