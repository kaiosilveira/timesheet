const user = {
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