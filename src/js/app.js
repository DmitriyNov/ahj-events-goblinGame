const cells = document.querySelectorAll(".field-item");
let current;

function addImage(number) {
  const image = document.createElement("div");
  image.classList.add("image")
  cells[number].classList.add("active");
  cells[number].appendChild(image);
}

function deleteImage(number) {
  cells[number].children[0].remove();
}

setInterval(() => {
  let number = Math.floor(Math.random() * 4);
  while (current === number) {
    number = Math.floor(Math.random() * 4);
  }
  if (current !== undefined) {
    deleteImage(current);
  }
  addImage(number);
  current = number;
}, 1000);
