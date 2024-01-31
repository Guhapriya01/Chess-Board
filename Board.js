// ------------------------ Board ---------------------------

class ChessBoard {

    #board; // private variable

    constructor(){
        this.#board = Array.from({length:8},()=>Array(8).fill(null));
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

        // place WHITE pieces in board array
    }

    renderPieces(){
        
        // place pieces in board (html)

    }

    addEventHandlers(){

        // for each piece

    }

    handleCellClick(row, col){

        // 
    }

    movePiece(from, to){

    }

    checkForWin(){

    }
}