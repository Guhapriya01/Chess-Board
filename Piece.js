// ------------------------ Piece ---------------------------

class Piece {

    constructor(name, isWhite){
        this.name = name;
        this.isWhite = isWhite;
        this.isCaptured = false;
    }

    getPiece() {
        return this;
    }

}

// Creating specific pieces

class King extends Piece{

    constructor(isWhite){
        super("K",isWhite);
    }

    move(fromX, fromY, toX, toY){
        
    }

    isValidMove(fromX, fromY, toX, toY){
        
    }
}

class Queen extends Piece{

    constructor(isWhite){
        super("Q",isWhite);
    }

    move(fromX, fromY, toX, toY){
        
    }

    isValidMove(fromX, fromY, toX, toY){
        
    }
}

class Bishop extends Piece{

    constructor(isWhite){
        super("B",isWhite);
    }

    move(fromX, fromY, toX, toY){
        
    }

    isValidMove(fromX, fromY, toX, toY){
        
    }
}

class Knight extends Piece{

    constructor(isWhite){
        super("N",isWhite);
    }

    move(fromX, fromY, toX, toY){
        
    }

    isValidMove(fromX, fromY, toX, toY){
        
    }
}

class Rook extends Piece{

    constructor(isWhite){
        super("R",isWhite);
    }

    move(fromX, fromY, toX, toY){
        
    }

    isValidMove(fromX, fromY, toX, toY){
        
    }
}

class Pawn extends Piece{

    constructor(isWhite){
        super("P",isWhite);
    }

    move(fromX, fromY, toX, toY){
        
    }

    isValidMove(fromX, fromY, toX, toY){
        
    }
}