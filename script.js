const container = document.querySelector(".container");
const colorPicker = document.querySelector(".colorpicker");
let tempCell;
let currentColor = "rgb(0, 0, 225)";
colorPicker.oninput = (e) => currentColor = `${e.target.value}`
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

makeGrid(16, 16)

const clearButton = document.querySelector(".button");
clearButton.addEventListener("click", () => clearBackground());

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = `${this.value}x${this.value}`;
    updateGrid();
}

function clearBackground() {

    const gridCells = document.querySelectorAll(".cell");
    gridCells.forEach((gridCell) => {
        gridCell.style.backgroundColor = "white";
    });
}

function changeBackgroundHover(color) {

    tempCell.style.backgroundColor = color.toLowerCase();

}

function updateGrid() {
    container.innerHTML = "";
    makeGrid(slider.value, slider.value);
}
