// ------------------------ Board ---------------------------

class ChessBoard {

    #board; // private variable

    constructor(){
        this.#board = Array.from({length:8},()=>Array(8).fill(null));
        this.initializeBoard();
        this.renderBoardAndPieces();
    }

    initializeBoard(){

        // place BLACK pieces in board array

        this.#board[0][0] = new Rook("R", false);
        this.#board[0][1] = new Knight("N", false);
        this.#board[0][2] = new Bishop("B", false);
        this.#board[0][3] = new Queen("Q", false);
        this.#board[0][4] = new King("K", false);
        this.#board[0][5] = new Bishop("B", false);
        this.#board[0][6] = new Knight("K", false);
        this.#board[0][7] = new Rook("R", false);
        
        for (let i = 0; i < 8; i++) {
            this.#board[1][i] = new Pawn("P", false);   
        }

        // Place WHITE pieces in board array
    }

    renderBoardAndPieces(){

        // Render board and place pieces in board (document)

        let n = 8;
        let board = document.createElement("div");

        for (let i = 0; i < n; i++) {
            const rowDiv = document.createElement("div");

            for (let j = 0; j < n; j++) {
                const colDiv = document.createElement("div");

                const color = (i + j) % 2 === 0 ? "white" : "black";

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

    }

    addEventHandlers(){

        // for each piece - click event

    }

    handleCellClick(x, y){

    }

    movePiece(fromX, fromY, toX, toY){

    }

    checkForWin(){

    }
}

const chessBoard = new ChessBoard();
