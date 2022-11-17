// import moveObstacles from "./obstacles";
function init() {
  let laneOneInterval;
  let laneTwoInterval;
  let frisbeesOneInterval;
  let patchesOneInterval;
  let patchesTwoInterval;

  function addObject(obstacle, className, row) {
    obstacle.forEach((index) => {
      cells[index].classList.add(className);
    });
  }

  function removeObject(obstacle, className, row) {
    obstacle.forEach((index) => {
      cells[index].classList.remove(className);
    });
  }

  function moveLaneOne(direction, row, obstacle, className, speed) {
    let newObstacleArray = obstacle.map((index) => (index += row));

    laneOneInterval = setInterval(() => {
      // console.log(newObstacleArray);
      removeObject(newObstacleArray, className, row);
      newObstacleArray = newObstacleArray.map((index) => {
        if (index > row + width - 2 && direction === +1) {
          return (index -= width - 1);
        } else if (index < row + 1 && direction === -1) {
          return (index += width - 1);
        } else {
          return (index += direction);
        }
      });
      // console.log(newObstacleArray);
      addObject(newObstacleArray, className, row);
      checkCollision();
    }, speed);
    roadDesign();
  }

  function moveLaneTwo(direction, row, obstacle, className, speed) {
    let newObstacleArray = obstacle.map((index) => (index += row));

    laneTwoInterval = setInterval(() => {
      // console.log(newObstacleArray);
      removeObject(newObstacleArray, className, row);
      newObstacleArray = newObstacleArray.map((index) => {
        if (index > row + width - 2 && direction === +1) {
          return (index -= width - 1);
        } else if (index < row + 1 && direction === -1) {
          return (index += width - 1);
        } else {
          return (index += direction);
        }
      });
      // console.log(newObstacleArray);
      addObject(newObstacleArray, className, row);
      checkCollision();
    }, speed);
    roadDesign();
  }

  function moveFrisbeesOne(direction, row, obstacle, className, speed) {
    let newObstacleArray = obstacle.map((index) => (index += row));

    frisbeesOneInterval = setInterval(() => {
      // console.log(newObstacleArray);
      removeObject(newObstacleArray, className, row);
      newObstacleArray = newObstacleArray.map((index) => {
        if (index > row + width - 2 && direction === +1) {
          return (index -= width - 1);
        } else if (index < row + 1 && direction === -1) {
          return (index += width - 1);
        } else {
          return (index += direction);
        }
      });
      // console.log(newObstacleArray);
      addObject(newObstacleArray, className, row);
      checkCollision();
    }, speed);
    roadDesign();
  }

  function movePatchesOne(direction, row, obstacle, className, speed) {
    let newObstacleArray = obstacle.map((index) => (index += row));

    patchesOneInterval = setInterval(() => {
      console.log(bootPosition);
      // console.log(newObstacleArray);
      removeObject(newObstacleArray, className, row);
      removeBoot(newObstacleArray);
      newObstacleArray = newObstacleArray.map((index) => {
        if (index > row + width - 2 && direction === +1) {
          return (index -= width - 1);
        } else if (index < row + 1 && direction === -1) {
          return (index += width - 1);
        } else {
          return (index += direction);
        }
      });
      // console.log(newObstacleArray);
      addObject(newObstacleArray, className, row);
      checkCollision();
    }, speed);
    roadDesign();
  }

  function removeBoot(obstacle) {
    obstacle.forEach((index) => {
      if (cells[index].classList.contains("boot")) {
        cells[index].classList.remove("boot");
      }
    });
  }

  function addBoot(obstacle, direction) {
    if (cells[bootPosition].classList.contains("green-patch")) {
      bootPosition += direction;
      cells[bootPosition].classList.add("boot");
    }
  }

  function movePatchesTwo(direction, row, obstacle, className, speed) {
    let newObstacleArray = obstacle.map((index) => (index += row));

    patchesTwoInterval = setInterval(() => {
      // console.log(newObstacleArray);
      removeObject(newObstacleArray, className, row);
      newObstacleArray = newObstacleArray.map((index) => {
        if (index > row + width - 2 && direction === +1) {
          return (index -= width - 1);
        } else if (index < row + 1 && direction === -1) {
          return (index += width - 1);
        } else {
          return (index += direction);
        }
      });
      // console.log(newObstacleArray);
      addObject(newObstacleArray, className, row);
      checkCollision();
    }, speed);
    roadDesign();
  }

  const obstacleIntervals = [
    laneOneInterval,
    laneTwoInterval,
    frisbeesOneInterval,
    patchesOneInterval,
  ];

  const grid = document.querySelector(".grid");
  const startGameDiv = document.querySelector(".start-game");
  const endGameDiv = document.querySelector(".game-over");
  const gameWonDiv = document.querySelector(".game-won");
  const playAgainButton = document.querySelectorAll(".play-again");
  const startGameButton = document.querySelector(".play");
  const levelDisplay = document.querySelector(".level");
  let level = 0;

  const width = 11;
  const gridCellCount = width * width;
  const cells = [];
  let laneOneRow = width * 3;
  const laneTwoRow = width;
  const frisbeeRow = width * 5;
  const bogRowOne = width * 8;
  const bogRowTwo = width * 7;
  const obstacles = {
    frisbees: [0, 3, 7, 9],
    laneOne: [0, 1, 2, 6, 7, 8],
    laneTwo: [0, 1, 2, 6, 7, 8],
    greenOne: [1, 2, 3, 8, 9, 10],
    greenTwo: [1, 2, 3, 8, 9, 10],
  };

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

  function startGame() {
    startGameDiv.style.display = "none";
    grid.style.display = "flex";
    levelDisplay.style.display = "flex";
    createGrid(bootPosition);
    levelZero();
  }

  startGameButton.addEventListener("click", startGame);

  function levelZero() {
    // console.log("level zero activated, laneOneRow is " + laneOneRow);
    moveFrisbeesOne(+1, frisbeeRow, obstacles.frisbees, "frisbee", 800);
    moveLaneOne(-1, laneOneRow, obstacles.laneOne, "lane-one", 1000);
    moveLaneTwo(+1, laneTwoRow, obstacles.laneTwo, "lane-two", 1000);
    movePatchesOne(+1, bogRowOne, obstacles.greenOne, "green-patch", 1000);
    movePatchesTwo(-1, bogRowTwo, obstacles.greenTwo, "green-patch", 1000);
  }

  function levelOne() {
    laneOneRow = width * 4;
    console.log("level one activated, laneOneRow is " + laneOneRow);
    // console.log("lane one in level one:" + laneOneRow);
    // moveObstacles(+1, frisbeeRow, obstacles.frisbees, "frisbee", 700);
    moveLaneOne(-1, laneOneRow, obstacles.laneOne, "lane-one", 1000);
    // moveObstacles(+1, laneTwoRow, obstacles.laneTwo, "lane-two", 400);
  }

  function replay() {
    cells[bootPosition].classList.remove("boot");
    bootPosition = Math.floor(width * width - width / 2);
    cells[bootPosition].classList.add("boot");
    gameWonDiv.style.display = "none";
    endGameDiv.style.display = "none";
    grid.style.display = "flex";
    levelDisplay.style.display = "flex";

    // if (level === 1){
    //   levelOne()
    // }
  }

  playAgainButton.forEach((button) => button.addEventListener("click", replay));

  function moveBoot(event) {
    cells[bootPosition].classList.remove("road-boot");
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
    bootRoadDesign();
    cells[bootPosition].classList.add("boot");
  }
  document.addEventListener("keyup", moveBoot);

  function checkCollision() {
    const obstacleClassNames = ["frisbee", "lane-one", "lane-two"];
    obstacleClassNames.forEach((obstacle) => {
      if (cells[bootPosition].classList.contains(obstacle)) {
        // endGame();
        console.log("check collision activated");
      }
    });
  }

  function endGame() {
    console.log("end game activated");
    grid.style.display = "none";
    endGameDiv.style.display = "flex";
  }

  function roadDesign() {
    for (let i = 0; i < gridCellCount; i++) {
      if (
        (i >= laneOneRow && i <= laneOneRow + width - 1) ||
        (i >= laneTwoRow && i <= laneTwoRow + width - 1)
      ) {
        // console.log("it works!");
        cells[i].classList.add("road");
      } else {
        cells[i].classList.remove("road");
      }
    }
  }

  function bootRoadDesign() {
    if (cells[bootPosition].classList.contains("road")) {
      cells[bootPosition].classList.add("road-boot");
    }
  }

  function checkGameWon() {
    if (bootPosition < width - 1) {
      // console.log("it works!");
      // grid.style.display = "none";
      // gameWonDiv.style.display = "flex";
      // levelDisplay.style.display = "none";
      level += 1;
      levelDisplay.innerHTML = `Level: ${level}`;
      clearInterval(laneOneInterval);
      clearInterval(laneTwoInterval);
      clearInterval(frisbeesOneInterval);
      clearInterval(patchesOneInterval);
      clearInterval(patchesTwoInterval);
    }
  }
}
window.addEventListener("DOMContentLoaded", init);
