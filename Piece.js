// ------------------------ Piece ---------------------------

class Piece {

    constructor(name, isWhite){
        this.name = name;
        this.isWhite = isWhite;
        this.isCaptured = false;
    }

}

// Creating specific pieces

class King extends Piece{

    constructor(isWhite){
        super("K",isWhite)
    }

    move(from, to){

    }

    isValidMove(from, to) {

    }
}

class Queen extends Piece{

    constructor(isWhite){
        super("Q",isWhite)
    }

    move(from, to){
        
    }

    isValidMove(from, to) {
        
    }
}

class Bishop extends Piece{

    constructor(isWhite){
        super("B",isWhite)
    }

    move(from, to){
        
    }

    isValidMove(from, to) {
        
    }
}

class Knight extends Piece{

    constructor(isWhite){
        super("N",isWhite)
    }

    move(from, to){
        
    }

    isValidMove(from, to) {
        
    }
}

class Rook extends Piece{

    constructor(isWhite){
        super("R",isWhite)
    }

    move(from, to){
        
    }

    isValidMove(from, to) {
        
    }
}

class Pawn extends Piece{

    constructor(isWhite){
        super("P",isWhite)
    }

    move(from, to){
        
    }

    isValidMove(from, to) {
        
    }
}