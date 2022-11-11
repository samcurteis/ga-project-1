function init() {
  const grid = document.querySelector(".grid");

  const width = 9;
  const gridCellCount = width * width;
  const cells = [];
  let bootPosition = 76;

  function createGrid(startingPosition) {
    for (let index = 0; index < gridCellCount; index++) {
      console.log("it works!");
      const cell = document.createElement("div");
      cell.setAttribute("data-index", index);
      cell.innerHTML = index;
      cells.push(cell);
      grid.appendChild(cell);
    }
    cells[startingPosition].classList.add("boot");
  }

  function addBoot(position) {
    cells[position].classList.add("boot");
  }

  function removeBoot(position) {
    cells[position].classList.remove("boot");
  }

  createGrid(bootPosition);
}

window.addEventListener("DOMContentLoaded", init);
