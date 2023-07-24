export default class Motion {
  constructor(field) {
    this.field = field;
  }

  addImage(number) {
    this.field[number].classList.add("image");
  }

  deleteImage(number) {
    this.field[number].classList.remove("image");
  }
}
