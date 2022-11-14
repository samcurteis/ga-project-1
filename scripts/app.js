function init() {
  const grid = document.querySelector(".grid");

  const width = 15;
  const gridCellCount = width * width;
  const cells = [];
  const rowEight = width * 8;

  let bootPosition = 217;

  function createGrid(startingPosition) {
    for (let i = 0; i < gridCellCount; i++) {
      const cell = document.createElement("div");
      cell.setAttribute("data-index", i);
      cell.innerHTML = i;
      cells.push(cell);
      grid.appendChild(cell);
    }
    cells[startingPosition].classList.add("boot");
  }

  createGrid(bootPosition);

  function addObject(row, className) {
    row.forEach((index) => {
      cells[index].classList.add(className);
    });
  }

  function removeObject(row, className) {
    row.forEach((index) => {
      cells[index].classList.remove(className);
    });
  }

  function moveObstacles(row, className, speed) {
    setInterval(() => {
      removeObject(row, className);
      row = row.map((index) => {
        if (index > rowEight + width - 2) {
          return (index -= width + -1);
        } else {
          return (index += 1);
        }
      });
      addObject(row, className);
    }, speed);
  }

  moveObstacles(obstacles.frisbees, "frisbee", 800);

  // function runGameOver() {
  //   grid.removeAttribute("div");
  //   // console.log("it works!");
  // }
  const obstacles = {
    frisbees: [rowEight, rowEight + 3, rowEight + 7, rowEight + 11],
  };

  function handleCollision(obstacle) {
    if (bootPosition.classList.contains(obstacle)) {
      console.log("it works!");
    }
  }

  //   function obstacles (array) => {
  //     console.log(array);
  //     array.forEach((obstacle) => {
  //       if (obstacle.classList.contains("boot")) {
  //         console.log("it works!");
  //         runGameOver();
  //       }
  //     })};);

  handleCollision("frisbee");

  function moveBoot(event) {
    cells[bootPosition].classList.remove("boot");
    const x = bootPosition % width;
    const y = Math.floor(bootPosition / width);
    // console.log(x, y);

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
    cells[bootPosition].classList.add("boot");
  }
  document.addEventListener("keyup", moveBoot);
}

window.addEventListener("DOMContentLoaded", init);
