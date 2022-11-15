function init() {
  const grid = document.querySelector(".grid");
  const endGameDiv = document.querySelector(".game-over");
  const gameWonDiv = document.querySelector(".game-won");
  const width = 11;
  const gridCellCount = width * width;
  const cells = [];
  let laneOneRow = width * 5;
  const laneTwoRow = width * 3;
  const frisbeeRow = width * 8;
  const obstacles = {
    frisbees: [frisbeeRow, frisbeeRow + 3, frisbeeRow + 7, frisbeeRow + 10],
    laneOne: [
      laneOneRow,
      laneOneRow + 1,
      laneOneRow + 2,
      laneOneRow + 6,
      laneOneRow + 7,
      laneOneRow + 8,
    ],
    laneTwo: [
      laneTwoRow,
      laneTwoRow + 1,
      laneTwoRow + 2,
      laneTwoRow + 6,
      laneTwoRow + 7,
      laneTwoRow + 8,
    ],
  };

  function roadDesign() {
    for (let i = 0; i < gridCellCount; i++) {
      if (
        (i >= laneOneRow && i <= laneOneRow + width - 1) ||
        (i >= laneTwoRow && i <= laneTwoRow + width - 1)
      ) {
        console.log("it works!");
        cells[i].classList.add("road");
      }
    }
  }

  let bootPosition = Math.floor(width * width - width / 2);

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

  function addObject(obstacle, className) {
    obstacle.forEach((index) => {
      cells[index].classList.add(className);
    });
  }

  function removeObject(obstacle, className) {
    obstacle.forEach((index) => {
      cells[index].classList.remove(className);
    });
  }

  function moveObstacles(direction, row, obstacle, className, speed) {
    setInterval(() => {
      removeObject(obstacle, className);
      obstacle = obstacle.map((index) => {
        if (index > row + width - 2 && direction === +1) {
          return (index -= width - 1);
        } else if (index < row + 1 && direction === -1) {
          return (index += width - 1);
        } else {
          return (index += direction);
        }
      });
      addObject(obstacle, className);
      checkCollision();
    }, speed);
    roadDesign();
  }

  function levelOne() {
    moveObstacles(+1, frisbeeRow, obstacles.frisbees, "frisbee", 800);
    moveObstacles(-1, laneOneRow, obstacles.laneOne, "lane-one", 1000);
    moveObstacles(+1, laneTwoRow, obstacles.laneTwo, "lane-two", 1000);
  }

  levelOne();

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
    checkCollision();
    checkGameWon();
    cells[bootPosition].classList.add("boot");
  }
  document.addEventListener("keyup", moveBoot);

  function checkCollision() {
    const obstacleClassNames = ["frisbee", "lane-one", "lane-two"];
    obstacleClassNames.forEach((obstacle) => {
      if (cells[bootPosition].classList.contains(obstacle)) {
        endGame();
        // console.log("it works!");
      }
    });
  }

  function checkGameWon() {
    if (bootPosition < width - 1) {
      console.log("it works!");
      grid.style.display = "none";
      gameWonDiv.style.display = "flex";
    }
  }

  function endGame() {
    grid.style.display = "none";
    endGameDiv.style.display = "flex";
  }

  function replay() {
    cells[bootPosition].classList.remove("boot");
    bootPosition = Math.floor(width * width - width / 2);
    gameWonDiv.style.display = "none";
    endGameDiv.style.display = "none";
    grid.style.display = "flex";
    cells[bootPosition].classList.add("boot");
  }

  const playAgainButton = document.querySelectorAll(".play-again");
  playAgainButton.forEach((button) => button.addEventListener("click", replay));
}
window.addEventListener("DOMContentLoaded", init);
