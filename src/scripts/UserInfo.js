export default class UserInfo {
    constructor(userNameSelector, userPositionSelector, avatarSelector) {
        this._userNameElement = document.querySelector(userNameSelector)
        this._userPositionElement = document.querySelector(userPositionSelector)
        this._userAvatarElement = document.querySelector(avatarSelector)
    }

    getUserInfo() {
        const name = this._userNameElement.textContent
        const position = this._userPositionElement.textContent
        return {name, position}
    }

    setUserInfo(inputs) {
        this._userNameElement.textContent = `${inputs.username}`
        this._userPositionElement.textContent = inputs.userPosition
        this._userAvatarElement.src = inputs.avatar


    }
}
