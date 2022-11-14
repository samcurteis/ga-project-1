function init() {
  const grid = document.querySelector(".grid");

  const width = 9;
  const gridCellCount = width * width;
  const cells = [];
  const rowFour = [27, 30, 33];
  // const rowFour = [];

  let bootPosition = 76;

  // function createGrid(startingPosition) {
  //   for (let index = 0; index < gridCellCount; index++) {
  //     // console.log("it works!");
  //     const cell = document.createElement("div");
  //     if (index < width * 4 && index > width * 3 - 1) {
  //       cell.dataset.row = 4;
  //       cell.dataset.index = index;
  //       rowFour.push(cell);
  //     } else {
  //       cell.dataset.index = index;
  //     }
  //     cell.innerHTML = index;
  //     cells.push(cell);
  //     grid.appendChild(cell);
  //   }
  //   cells[startingPosition].classList.add("boot");
  // }

  function createGrid() {
    for (let i = 0; i < gridCellCount; i++) {
      const cell = document.createElement("div");
      cell.setAttribute("data-index", i);
      cells.push(cell);
      grid.appendChild(cell);
    }
  }

  console.log(cells, rowFour);

  // function addObject(index, className) {
  //   index.classList.add(className);
  // }

  // function removeObject(index, className) {
  //   index.classList.remove(className);
  // }

  // function moveObstacles(row, className, speed) {
  //   setInterval(
  //     () => {
  //       rowFour.forEach((index) => removeObject(index, "frisbee"))
  //       for (let index = 0; index < row.length; index = index + 3) {
  //         row[index - 1].classList.remove(className);
  //         const element = row[index];
  //         // const newObject = document.createElement("div");
  //         element.classList.add(className);

  //         const newDiv = document.createElement("div");
  //         row.push(newDiv);
  //       }
  //       rowFour.forEach((index) => addObject(index, "frisbee"));
  //     },

  //     speed
  //   );
  // }
  // moveObstacles(rowFour, "frisbee", 1000);

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
        if (index > width * 4 - 2) {
          return (index -= width + -1);
        } else {
          return (index += 1);
        }
      });
      addObject(row, className);
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
