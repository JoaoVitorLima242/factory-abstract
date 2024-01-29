export default class NotImplementedException {
  constructor(message) {
    console.log(`the "${message}" was not implemented`);
    this.name = "NotImplementedException";
  }
}
