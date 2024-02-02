// ------------------------ Board ---------------------------

class ChessBoard {

    // private variables
    #board; 
    #pieceNames = ["R","N","B","Q","K","B","N","R"]; 
    #flag = true;
    #from;
    #captured = [];

    constructor(){
        this.#board = Array.from({length:8},()=>Array(8).fill(null));
        this.renderBoard();
        this.initializeBoard();
        this.addEventHandlers();
    }

    initializeBoard(){

        // Place BLACK pieces in board array and in the HTML document

        this.#board[0][0] = new Rook("black");
        this.#board[0][1] = new Knight("black");
        this.#board[0][2] = new Bishop("black");
        this.#board[0][3] = new Queen("black");
        this.#board[0][4] = new King("black");
        this.#board[0][5] = new Bishop("black");
        this.#board[0][6] = new Knight("black");
        this.#board[0][7] = new Rook("black");

        for (let i = 0; i < 8; i++) {

            // Place K,Q,B,N,R
            let img = document.querySelector(`[data-x="0"][data-y="${i}"]`).childNodes[0];
            img.src = `Images/${this.#pieceNames[i]}-B.png`;
    
        }
        
        for (let i = 0; i < 8; i++) {

            this.#board[1][i] = new Pawn(false); 

            // Place Pawn Piece 
            let img = document.querySelector(`[data-x="1"][data-y="${i}"]`).childNodes[0];
            img.src = "Images/P-B.png";
            
        }

        // Place WHITE pieces in board array and in the HTML document

        this.#board[7][0] = new Rook("white");
        this.#board[7][1] = new Knight("white");
        this.#board[7][2] = new Bishop("white");
        this.#board[7][3] = new Queen("white");
        this.#board[7][4] = new King("white");
        this.#board[7][5] = new Bishop("white");
        this.#board[7][6] = new Knight("white");
        this.#board[7][7] = new Rook("white");

        for (let i = 0; i < 8; i++) {

            // place K,Q,B,N,R
            let img = document.querySelector(`[data-x="7"][data-y="${i}"]`).childNodes[0];
            img.src = `Images/${this.#pieceNames[i]}-W.png`;

        }
        
        for (let i = 0; i < 8; i++) {

            this.#board[6][i] = new Pawn(true); 

            // Place pawn 
            let img = document.querySelector(`[data-x="6"][data-y="${i}"]`).childNodes[0];
            img.src =  "Images/P-W.png";
            
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

                const color = (i + j) % 2 === 0 ? "#EADAB9" : "#C2A482";
                colDiv.style.backgroundColor = color;
                colDiv.className = "box";
                colDiv.dataset.x = i;
                colDiv.dataset.y = j;

                const img = document.createElement("img");
                img.src = "Images/empty.png";
                colDiv.appendChild(img);
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
        const board = document.getElementById("board");

        board.addEventListener("click",(e)=>{
            
            if(e.target.tagName === 'IMG'){
                // for cell with piece
                if(this.#flag){
                    this.#from = e.target.parentNode;
                }
                else{
                    this.movePiece(this.#from, e.target.parentNode);
                }
            }
            else{
                // for empty cell
                if(this.#flag){
                    this.#from = e.target;
                }
                else{
                    this.movePiece(this.#from, e.target);
                }
            } 
            this.#flag = !this.#flag;
        });
    }

    movePiece(from, to){

        let fromX = from.dataset.x;
        let toX = to.dataset.x;
        let fromY = from.dataset.y;
        let toY = to.dataset.y;

        // change in board

        let fromPiece = this.#board[fromX][fromY];
        let toPiece = this.#board[toX][toY];
      
      
        // same colour
      
        if(toPiece!=null && fromPiece!=null && fromPiece.color === toPiece.color){
            console.log("Moving pieces of same color");
            return;
        }
        
        this.#board[fromX][fromY] = null;
        this.#board[toX][toY] = fromPiece;

        // validate for captured

        if(toPiece!=null && fromPiece.color !== toPiece.color){
            toPiece.isCaptured = true;
            this.#captured.push(toPiece);
        }

        // change in html

        const fromSrc = from.childNodes[0].src;

        from.childNodes[0].src = 'https://gal.sh/img/empty-4x3.png';
        to.childNodes[0].src = fromSrc;

        console.log(this.#captured);
        console.log(this.#board);

    }

    checkForWin(){

    }
}

const chessBoard = new ChessBoard();