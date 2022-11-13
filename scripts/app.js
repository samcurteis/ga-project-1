function init() {
  const grid = document.querySelector(".grid");

  const width = 9;
  const gridCellCount = width * width;
  const cells = [];
  let bootPosition = 76;
  let frisbeePositions = [width * 4, width * 4 + 3, width * 4 + 6];
  console.log(frisbeePositions);

  function createGrid(startingPosition) {
    for (let index = 0; index < gridCellCount; index++) {
      // console.log("it works!");
      const cell = document.createElement("div");
      cell.setAttribute("data-index", index);
      cell.innerHTML = index;
      cells.push(cell);
      grid.appendChild(cell);
    }
    cells[startingPosition].classList.add("boot");
  }

  function addObject(position, className) {
    cells[position].classList.add(className);
  }

  function removeObject(position, className) {
    cells[position].classList.remove(className);
  }

  function moveObstacles(className, positionsToHandle, speed) {
    setInterval(() => {
      positionsToHandle.forEach((position) =>
        removeObject(position, className)
      );
      // console.log(positionsToHandle);
      positionsToHandle = positionsToHandle.map((position) => {
        // ++position);
        const x = position % width;
        console.log(position, x);
        if (x < width - 1) {
          position = position + 1;
        } else if (x === width - 1) {
          position -= width - 1;
        }
      });
      // console.log(positionsToHandle);
      positionsToHandle.forEach((position) => addObject(position, className));
    }, speed);
  }

  createGrid(bootPosition);
  moveObstacles("frisbee", frisbeePositions, 1000);

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

// const x = frisbeePosition.map((frisbee) => frisbee % width);
// if (x.forEach((i) => i < width - 1) {
//   frisbeePosition++;
// } else if (x.forEach((i) => i === width - 1) {
//   frisbeePosition -= width - 1;
// }
