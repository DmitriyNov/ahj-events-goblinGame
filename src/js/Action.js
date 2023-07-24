export default class Action {
  constructor(field) {
    this.field = field;
    this.click = this.click.bind(this);
  }

  click(handler) {
    this.field.addEventListener("click", (event) => {
      if (event.target.classList.contains("image")) {
        handler();
      }
    });
  }
}
