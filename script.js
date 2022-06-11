//Initilize divs
const container = document.querySelector(".container");
const colorPicker = document.querySelector(".colorpicker");
//initilize cell and default color
let tempCell;
let currentColor = "rgb(0, 0, 225)";
colorPicker.oninput = (e) => currentColor = `${e.target.value}`;

//create grid function
function makeGrid(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("cell");
        // newDiv.innerHTML = `${i+1}`;
        // newDiv.style.fontSize = "8px";
        container.appendChild(newDiv);
    }
    container.style.gridTemplateColumns = `repeat(${cols}, auto)`;
    container.style.gridTemplateRows = `repeat(${rows}, auto)`;

    const gridCells = document.querySelectorAll(".cell");
    gridCells.forEach((gridCell) => {
        gridCell.addEventListener("mouseover", (e) => {
            if (e.buttons == 1 || e.buttons == 3) {
                tempCell = gridCell;
                changeBackgroundHover(currentColor);
            }
        })
    });


};
//init  default 16x16 grid
makeGrid(16, 16)

//intilize buttons
const clearButton = document.querySelector(".button");
clearButton.addEventListener("click", () => clearBackground());

const rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener("click", () => currentColor = "rainbow");

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");


//initlize default output for slider
output.innerHTML = `${slider.value}x${slider.value}`;

//update grid with slider value
slider.oninput = function () {
    output.innerHTML = `${this.value}x${this.value}`;
    updateGrid();
}

//clears background of each grid cell without deleting it
function clearBackground() {

    const gridCells = document.querySelectorAll(".cell");
    gridCells.forEach((gridCell) => {
        gridCell.style.backgroundColor = "transparent";
    });
}


//changes background color when hover and clicked on grid cell
let i = 0;
function changeBackgroundHover(color) {
    if (color !== "rainbow") {
        tempCell.style.backgroundColor = color.toLowerCase();
    } else {
        const rainbowColors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];

        // let randomRainbowColor = Math.floor(Math.random() * 8) + 1;
        tempCell.style.backgroundColor = rainbowColors[i];

        // tempCell.style.backgroundColor = rainbowColors[randomRainbowColor];
        i++;
        if (i > 6) i = 0;
    }
}


//helper function to update grid
function updateGrid() {
    container.innerHTML = "";
    makeGrid(slider.value, slider.value);
}