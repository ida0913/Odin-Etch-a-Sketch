let container = document.querySelector(".container");
let rows = 16, cols = 16;

function makeGrid(rows, cols){

for (let i = 0; i < (rows * cols); i++) {

    const newDiv = document.createElement("div");
    container.appendChild(newDiv).className = "cell";

};

};


makeGrid(64, 64)
