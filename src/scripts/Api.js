export default class Api {
    constructor() {

    }

    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-25/cards', {
            headers: {
                authorization: '2f57e5f9-01c4-4016-af33-d25e0f4a6e94'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else return Promise.reject(`Error ${res.status}`)
            })


    }

    getUserInfo() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-25/users/me', {
            headers: {
                authorization: '2f57e5f9-01c4-4016-af33-d25e0f4a6e94'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else return Promise.reject(`Error ${res.status}`)
            })


    }
}
    
    
