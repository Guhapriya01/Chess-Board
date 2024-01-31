let n = 8;
let board = document.createElement("div");

for (let i = 0; i < n; i++) {
    const rowDiv = document.createElement("div");

    for (let j = 0; j < n; j++) {
       const colDiv = document.createElement("div");

       const color = (i + j) % 2 === 0 ? "white" : "grey";

       colDiv.style.backgroundColor = color;
       colDiv.className = "box";
       colDiv.dataset.x = i;
       colDiv.dataset.y = j;

       rowDiv.appendChild(colDiv);
    } 

    rowDiv.style.height = "80px";
    board.appendChild(rowDiv);
}

board.id = "board";
board.style.width = `${n * 80}px`;
document.body.appendChild(board);


/*
   0 1 2 
0  0 1 2
1  1 2 3

colDiv.style.width = `${size}px`;
colDiv.style.height = `${size}px`;
let size = "80";


*/
