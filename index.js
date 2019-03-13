let numOfSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let displayMessage = document.getElementById("message");
let h1 = document.querySelector("h1");
let newColors = document.getElementById("new_colors_button");
let modeButtons = document.querySelectorAll(".mode");

start();

function start() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons() {
  for (let i = 0; i < modeButtons.length; i += 1) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
      reset();
    });
  }
}

function setUpSquares() {
  for (let i = 0; i < squares.length; i += 1) {
    squares[i].addEventListener("click", function () {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        displayMessage.textContent = "Correct!";
        newColors.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        displayMessage.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  colors = generateColors(numOfSquares);
  // get new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match the picked color
  colorDisplay.textContent = pickedColor;
  newColors.textContent = "New Colors";
  // change color of squares
  for (let i = 0; i < squares.length; i += 1) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    squares[i].style.backgroundColor = colors[i];
  }
  displayMessage.textContent = "";
  h1.style.backgroundColor = "steelblue";
}

newColors.addEventListener("click", () => {
  reset();
});

function changeColors(color) {
  for (let i = 0; i < squares.length; i += 1) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateColors(num) {
  let arr = [];
  for (let i = 0; i < num; i += 1) {
    arr.push(randomColor())
  }
  return arr;
}

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  "rgb(r, g, b)"
  // return "rgb(" + red + ", " + green + ", " + blue + ")";
  return `rgb(${red}, ${green}, ${blue})`;
}

