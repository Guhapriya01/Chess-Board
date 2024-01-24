var n = 8;
var board = document.createElement("div");

for (let i = 0; i < n; i++) {
    const rowDiv = document.createElement("div");

    for (let j = 0; j < n; j++) {
       var colDiv =  document.createElement("div");
       var colour = (i+j)%2 == 0 ? "white" : "black";

       colDiv.style.backgroundColor = colour;
       colDiv.className = "box";
       rowDiv.appendChild(colDiv);
        
    } 
    rowDiv.style.height = "80px";
    board.appendChild(rowDiv);
}

board.className = "board";
board.style.width = `${n*80}px`;
document.body.appendChild(board);

//    0 1 2 
// 0  0 1 2
// 1  1 2 3

//    colDiv.style.width = `${size}px`;
//    colDiv.style.height = `${size}px`;

// var size = "80";
