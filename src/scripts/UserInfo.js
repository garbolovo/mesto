export default class UserInfo {
    constructor(userNameSelector, userPositionSelector) {
        this._userNameElement = document.querySelector(userNameSelector)
        this._userPositionElement = document.querySelector(userPositionSelector)
    }

    getUserInfo() {
        const name = this._userNameElement.textContent
        const position = this._userPositionElement.textContent
        return {name, position}
    }

    setUserInfo(inputs) {
        // const userData = this.getUserInfo();
        this._userNameElement.textContent = `${inputs.username}`
        // this._userNameElement.textContent = `Hello World !`
        this._userPositionElement.textContent = inputs.userposition



    }
}
