export default moveObstacles;

// function moveObstacles() {
let laneOneInterval;
let laneTwoInterval;
let frisbeesOneInterval;
let patchesOneInterval;

const moveObstacles = [
  laneOneInterval,
  laneTwoInterval,
  frisbeesOneInterval,
  patchesOneInterval,
];

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

  const laneOneInterval = setInterval(() => {
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

  const laneTwoInterval = setInterval(() => {
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

  const frisbeesOneInterval = setInterval(() => {
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

  const patchesOneInterval = setInterval(() => {
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

//  function moveObstacles(direction, row, obstacle, className, speed) {
//     let newObstacleArray = obstacle.map((index) => (index += row));

//     const obstacleInterval = setInterval(() => {
//       // console.log(newObstacleArray);
//       removeObject(newObstacleArray, className, row);
//       newObstacleArray = newObstacleArray.map((index) => {
//         if (index > row + width - 2 && direction === +1) {
//           return (index -= width - 1);
//         } else if (index < row + 1 && direction === -1) {
//           return (index += width - 1);
//         } else {
//           return (index += direction);
//         }
//       });
//       // console.log(newObstacleArray);
//       addObject(newObstacleArray, className, row);
//       checkCollision();
//     }, speed);
//     roadDesign();
//   }
