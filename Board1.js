// ------------------------ Piece ---------------------------

class Piece {
    constructor(name, color, x, y) {
      this.name = name;
      this.color = color;
      this.position = { x, y };
      this.isCaptured = false;
    }
  
    getPiece() {
      return this;
    }
  }
  
  // Creating specific pieces
  
  class King extends Piece {
    constructor(color, x, y) {
      super("K", color, x, y);
    }
  
    move(toX, toY) {}
  
    isValidMove(toX, toY) {}
  }
  
  class Queen extends Piece {
    constructor(color, x, y) {
      super("Q", color, x, y);
    }
  
    move(toX, toY) {}
  
    isValidMove(toX, toY) {}
  }
  
  class Bishop extends Piece {
    constructor(color, x, y) {
      super("B", color, x, y);
    }
  
    move(toX, toY) {}
  
    isValidMove(toX, toY) {}
  }
  
  class Knight extends Piece {
    constructor(color, x, y) {
      super("N", color, x, y);
    }
  
    move(toX, toY) {}
  
    isValidMove(toX, toY) {}
  }
  
  class Rook extends Piece {
    constructor(color, x, y) {
      super("R", color, x, y);
    }
  
    move(toX, toY) {}
  
    isValidMove(toX, toY) {}
  }
  
  class Pawn extends Piece {
    constructor(color, x, y) {
      super("P", color, x, y);
    }
  
    move(toX, toY) {}
  
    isValidMove(toX, toY) {}
  }
  
  // ------------------------ Board ---------------------------
  
  class ChessBoard {

    // private variables
  
    #chessPieces;
    #whitePieces = [
      "5/5c/Chess_rlt60.png",
      "2/28/Chess_nlt60.png",
      "9/9b/Chess_blt60.png",
      "4/49/Chess_qlt60.png",
      "3/3b/Chess_klt60.png",
      "9/9b/Chess_blt60.png",
      "2/28/Chess_nlt60.png",
      "5/5c/Chess_rlt60.png"
    ];
  
    #blackPieces = [
      "a/a0/Chess_rdt60.png",
      "f/f1/Chess_ndt60.png",
      "8/81/Chess_bdt60.png",
      "a/af/Chess_qdt60.png",
      "e/e3/Chess_kdt60.png",
      "8/81/Chess_bdt60.png",
      "f/f1/Chess_ndt60.png",
      "a/a0/Chess_rdt60.png"
    ];
    #flag = true;
    #from;
  
    constructor() {
      this.#chessPieces = Array(32).fill(null);
      this.renderBoard();
      this.initializeBoard();
      this.addEventHandlers();
    }
  
    initializeBoard() {

      // Place BLACK pieces in board array and in the HTML document
  
      this.#chessPieces[0] = new Rook("black", 0, 0);
      this.#chessPieces[1] = new Knight("black", 0, 1);
      this.#chessPieces[2] = new Bishop("black", 0, 2);
      this.#chessPieces[3] = new Queen("black", 0, 3);
      this.#chessPieces[4] = new King("black", 0, 4);
      this.#chessPieces[5] = new Bishop("black", 0, 5);
      this.#chessPieces[6] = new Knight("black", 0, 6);
      this.#chessPieces[7] = new Rook("black", 0, 7);
  
      for (let i = 0; i < 8; i++) {

        // Place K,Q,B,N,R
        let img = document.querySelector(`[data-x="0"][data-y="${i}"]`).childNodes[0];
        img.src = `https://upload.wikimedia.org/wikipedia/commons/${this.#blackPieces[i]}`;
      }
  
      for (let i = 0; i < 8; i++) {
        this.#chessPieces[i + 8] = new Pawn("black", 1, i);
  
        // Place Pawn Piece
        let img = document.querySelector(`[data-x="1"][data-y="${i}"]`).childNodes[0];
        img.src = "https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png";
      }
  
      // Place WHITE pieces in board array and in the HTML document
  
      this.#chessPieces[16] = new Rook("white", 7, 0);
      this.#chessPieces[17] = new Knight("white", 7, 1);
      this.#chessPieces[18] = new Bishop("white", 7, 2);
      this.#chessPieces[19] = new Queen("white", 7, 3);
      this.#chessPieces[20] = new King("white", 7, 4);
      this.#chessPieces[21] = new Bishop("white", 7, 5);
      this.#chessPieces[22] = new Knight("white", 7, 6);
      this.#chessPieces[23] = new Rook("white", 7, 7);
  
      for (let i = 0; i < 8; i++) {

        // place K,Q,B,N,R
        let img = document.querySelector(`[data-x="7"][data-y="${i}"]`).childNodes[0];
        img.src = `https://upload.wikimedia.org/wikipedia/commons/${this.#whitePieces[i]}`;
      }
  
      for (let i = 0; i < 8; i++) {
        this.#chessPieces[i + 24] = new Pawn("white", 6, i);
  
        // Place pawn
        let img = document.querySelector(`[data-x="6"][data-y="${i}"]`).childNodes[0];
        img.src ="https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png";
      }
    }
  
    renderBoard() {

      // Render board in the HTML document
  
      let n = 8;
      let board = document.createElement("div");
  
      for (let i = 0; i < n; i++) {
        const rowDiv = document.createElement("div");
  
        for (let j = 0; j < n; j++) {
          const colDiv = document.createElement("div");
  
          const color = (i + j) % 2 === 0 ? "#EADAB9" : "#826748";
          colDiv.style.backgroundColor = color;
          colDiv.className = "box";
          colDiv.dataset.x = i;
          colDiv.dataset.y = j;
  
          const img = document.createElement("img");
          img.src = "https://gal.sh/img/empty-4x3.png";
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
  
    addEventHandlers() {

      // for each piece - add click event listener
      const board = document.getElementById("board");
  
      board.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") {
          // for cell with piece
          if (this.#flag) {
            this.#from = e.target.parentNode;
          } 
          else {
            this.movePiece(this.#from, e.target.parentNode);
          }
        } 
        else {
          // for empty cell
          if (this.#flag) {
            this.#from = e.target;
          } 
          else {
            this.movePiece(this.#from, e.target);
          }
        }
        this.#flag = !this.#flag;
      });
    }
  
    movePiece(from, to) {
      let fromX = from.dataset.x;
      let toX = to.dataset.x;
      let fromY = from.dataset.y;
      let toY = to.dataset.y;
  
      // change in board
  
      let fromPiece;
      let toPiece;
  
      for (let index = 0; index < 32; index++) {
        const element = this.#chessPieces[index];
  
        if (!element.isCaptured) {
          if (element.position.x == fromX && element.position.y == fromY) {
            fromPiece = element;
          } 
          else if (element.position.x == toX && element.position.y == toY) {
            toPiece = element;
          }
        }
      }
  
      // 2 empty positions click
      if (!fromPiece || !toPiece && !fromPiece) {
        return;
      }
  
      if (toPiece != null && fromPiece != null) {
        if (fromPiece.color === toPiece.color) {
          // same colour
          console.log("Moving pieces of same color");
          return;
        } 
        else {
          // finding captured piece
          toPiece.isCaptured = true;
        }
      }
  
      fromPiece.position = { x: toX, y: toY };
  
      // change piece in html document
      const fromSrc = from.childNodes[0].src;
      from.childNodes[0].src = "https://gal.sh/img/empty-4x3.png";
      to.childNodes[0].src = fromSrc;
      console.log(this.#chessPieces);
    }
  
    checkForWin() {}
  }
  
const chessBoard = new ChessBoard();
  