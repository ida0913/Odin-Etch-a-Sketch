const container = document.querySelector(".container");

function makeRows(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("cell");
        // newDiv.innerHTML = `${i+1}`;
        // newDiv.style.fontSize = "8px";
        container.appendChild(newDiv);
    }
    container.style.gridTemplateColumns = `repeat(${cols}, auto)`;
    container.style.gridTemplateRows = `repeat(${rows}, auto)`;
};

makeRows(64, 64);

let tempCell;
const gridCells = document.querySelectorAll(".cell");
gridCells.forEach((gridCell) => {
    gridCell.addEventListener("mouseover", (e) => {
        if (e.buttons == 1 || e.buttons == 3) {

            tempCell = gridCell;
            changeBackgroundHover("red");
        }
    })
});

function changeBackgroundHover(color) {

    tempCell.style.backgroundColor = color.toLowerCase();

}
