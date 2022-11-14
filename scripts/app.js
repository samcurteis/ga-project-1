function init() {
  const grid = document.querySelector(".grid");
  const endGameDiv = document.querySelector(".endGame");
  const width = 15;
  const gridCellCount = width * width;
  const cells = [];
  const rowFour = width * 4;
  const rowEight = width * 8;
  const obstacles = {
    frisbees: [rowEight, rowEight + 3, rowEight + 7, rowEight + 11],
    laneOne: [rowFour, rowFour + 1],
  };
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
      // row = row.map((index) => {
      //   if (index > rowEight + width - 2) {
      //     return (index -= width + -1);
      //   } else {
      //     return (index += 1);
      //   }
      // });
      addObject(row, className);
    }, speed);
  }

  moveObstacles(obstacles.frisbees, "frisbee", 800);

  // function runGameOver() {
  //   grid.removeAttribute("div");
  //   // console.log("it works!");
  // }

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
    checkCollision("frisbee");
    cells[bootPosition].classList.add("boot");
  }
  document.addEventListener("keyup", moveBoot);

  function replay() {
    bootPosition = 217;
    endGameDiv.style.display = "none";
    grid.style.display = "flex";
    cells[bootPosition].classList.add("boot");
  }

  const tryAgainButton = document.querySelector(".try-again");
  tryAgainButton.addEventListener("click", replay);

  function endGame() {
    // const gridElements = Object.keys(grid);
    // gridElements.forEach((item) => item.remove());
    // // console.log("it works!");
    grid.style.display = "none";
    endGameDiv.style.display = "flex";
  }

  function checkCollision(className) {
    if (cells[bootPosition].classList.contains(className)) {
      endGame();
      console.log("it works!");
    }
  }
}
window.addEventListener("DOMContentLoaded", init);
