export default class Score {
  constructor(field) {
    this.field = field;
  }

  write(value) {
    this.field.textContent = value;
  }
}
