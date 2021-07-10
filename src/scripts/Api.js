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

        s
    }

    editUserProfile(user) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-25/users/me', {
            method: 'PATCH',
            headers: {
                authorization: '2f57e5f9-01c4-4016-af33-d25e0f4a6e94',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user.username,
                about: user.userposition,
            })
        })
            .then(res => {
                if (res.ok) {
                    // console.log(res.json())
                    return res.json()
                } else return Promise.reject(`Error ${res.status}`)
            })
    }

    addCard(card) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-25/cards', {
            method: 'POST',
            headers: {
                authorization: '2f57e5f9-01c4-4016-af33-d25e0f4a6e94',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: card.name,
                link: card.link,
            })
        })
            .then(res => {
                if (res.ok) {
                    // console.log(res.json())
                    return res.json()
                } else return Promise.reject(`Error ${res.status}`)
            })

    }


}


