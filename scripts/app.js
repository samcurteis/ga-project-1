function init() {
  const grid = document.querySelector(".grid");

  const width = 9;
  const gridCellCount = width * width;
  const cells = [];
  const rowFour = [];

  let bootPosition = 76;
  let frisbeePositions = [width * 4, width * 4 + 3, width * 4 + 6];
  // console.log(frisbeePositions);

  function createGrid(startingPosition) {
    for (let index = 0; index < gridCellCount; index++) {
      // console.log("it works!");
      const cell = document.createElement("div");
      if (index < width * 4 && index > width * 3 - 1) {
        cell.dataset.row = 4;
        cell.dataset.index = index;
        rowFour.push(cell);
      } else {
        cell.dataset.index = index;
      }
      cell.innerHTML = index;
      cells.push(cell);
      grid.appendChild(cell);
    }
    cells[startingPosition].classList.add("boot");
  }

  console.log(cells, rowFour);

  function addObject(array, position, className) {
    array[position].classList.add(className);
  }

  function removeObject(position, className) {
    array[position].classList.remove(className);
  }

  function moveObstacles(row, className, speed) {
    setInterval(() => {
      for (let index = 0; index < row.length; index = index = index + 3) {
        const element = document.createElement("div");
        row.createElement("div");
        element.classList.remove(className);

        element.classList.add(className);
      }
    }, speed);
  }

  createGrid(bootPosition);
  moveObstacles(rowFour, "frisbee", 1000);

  function moveBoot(event) {
    removeObject(bootPosition, "boot");
    const x = bootPosition % width;
    const y = Math.floor(bootPosition / width);
    console.log(x, y);

    switch (event.keyCode) {
      case 39:
        if (x < width - 1) bootPosition++;
        break;
      case 37:
        if (x > 0) bootPosition--;
        break;
      case 38:
        if (y > 0) bootPosition -= width;
        break;
      case 40:
        if (y < width - 1) bootPosition += width;
        break;
      default:
        console.log("invalid key");
    }
    addObject(bootPosition, "boot");
  }
  document.addEventListener("keyup", moveBoot);
}

window.addEventListener("DOMContentLoaded", init);
