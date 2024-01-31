// ------------------------ Board ---------------------------

class ChessBoard {

    // private variables
    #board; 
    #pieceNames = ["R","N","B","Q","K","B","N","R"]; 

    constructor(){
        this.#board = Array.from({length:8},()=>Array(8).fill(null));
        this.renderBoard();
        this.initializeBoard();
        this.addEventHandlers();
    }

    initializeBoard(){

        // Place BLACK pieces in board array and in the HTML document

        this.#board[0][0] = new Rook("R", false);
        this.#board[0][1] = new Knight("N", false);
        this.#board[0][2] = new Bishop("B", false);
        this.#board[0][3] = new Queen("Q", false);
        this.#board[0][4] = new King("K", false);
        this.#board[0][5] = new Bishop("B", false);
        this.#board[0][6] = new Knight("N", false);
        this.#board[0][7] = new Rook("R", false);


        for (let i = 0; i < 8; i++) {

            // place K,Q,B,N,R
            let div = document.querySelector(`[data-x="0"][data-y="${i}"]`);
            let img = document.createElement("img");
            img.src = `Images/${this.#pieceNames[i]}-B.png`;
            div.append(img);

            
        }
        
        for (let i = 0; i < 8; i++) {

            this.#board[1][i] = new Pawn("P", false); 

            // Place pawn images 
            let div = document.querySelector(`[data-x="1"][data-y="${i}"]`);
            let img = document.createElement("img");
            img.src = "Images/P-B.png";
            div.append(img);
            
        }

        // Place WHITE pieces in board array and in the HTML document

        this.#board[7][0] = new Rook("R", true);
        this.#board[7][1] = new Knight("N", true);
        this.#board[7][2] = new Bishop("B", true);
        this.#board[7][3] = new Queen("Q", true);
        this.#board[7][4] = new King("K", true);
        this.#board[7][5] = new Bishop("B", true);
        this.#board[7][6] = new Knight("N", true);
        this.#board[7][7] = new Rook("R", true);


        for (let i = 0; i < 8; i++) {

            // place K,Q,B,N,R
            let div = document.querySelector(`[data-x="7"][data-y="${i}"]`);
            let img = document.createElement("img");
            img.src = `Images/${this.#pieceNames[i]}-W.png`;
            div.append(img);

            
        }
        
        for (let i = 0; i < 8; i++) {

            this.#board[6][i] = new Pawn("P", true); 

            // Place pawn 
            let div = document.querySelector(`[data-x="6"][data-y="${i}"]`);
            let img = document.createElement("img");
            img.src = "Images/P-W.png";
            div.append(img);
            
        }

    }

    renderBoard(){

        // Render board in the HTML document

        let n = 8;
        let board = document.createElement("div");

        for (let i = 0; i < n; i++) {
            const rowDiv = document.createElement("div");

            for (let j = 0; j < n; j++) {
                const colDiv = document.createElement("div");

                const color = (i + j) % 2 === 0 ? "white" : "#5c5a5a";

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

        // for each piece -  add click event
        const ev = document.getElementById("board");
        ev.addEventListener("click",(e)=>{

            if(event.target.tagName === 'IMG'){
                // for cell with piece
                console.log(e.target.parentNode);
            }
            else{
                // for empty cell
                console.log(e.target);
            }
            
        });

    }

    handleCellClick(x, y){

    }

    movePiece(fromX, fromY, toX, toY){

    }

    checkForWin(){

    }
}

const chessBoard = new ChessBoard();
