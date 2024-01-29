export default class NotImplementedException {
    constructor(message) {
        super(`the "${message}" was not implemented`)
        this.name = "NotImplementedException"
    }
}