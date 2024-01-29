import NotImplementedException from "./notImplementedException.mjs";

export default class TableComponent {
  render(data) {
    throw new NotImplementedException(this.render.name);
  }

  prepareData(data) {
    throw new NotImplementedException(this.prepareData.name);
  }
}
