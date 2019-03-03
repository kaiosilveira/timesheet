import API_URL from '../API_URL'

class PeriodService {

    constructor(userId) {
        this.userId = userId;
    }

    getCurrent() {
        return fetch(`${API_URL}/periods/${this.userId}/current`).then(res => res.json());
    }
}

export default PeriodService