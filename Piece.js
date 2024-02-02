// ------------------------ Piece ---------------------------

class Piece {

    constructor(name, color){
        this.name = name;
        this.color = color;
        this.isCaptured = false;
    }

    getPiece() {
        return this;
    }

}

// Creating specific pieces

class King extends Piece{

    constructor(color){
        super("K",color);
    }

    move(fromX, fromY, toX, toY){
        
    }

    isValidMove(fromX, fromY, toX, toY){
        
    }
}

class Queen extends Piece{

    constructor(color){
        super("Q",color);
    }

    move(fromX, fromY, toX, toY){
        
    }

    isValidMove(fromX, fromY, toX, toY){
        
    }
}

class Bishop extends Piece{

    constructor(color){
        super("B",color);
    }

    move(fromX, fromY, toX, toY){
        
    }

    isValidMove(fromX, fromY, toX, toY){
        
    }
}

class Knight extends Piece{

    constructor(color){
        super("N",color);
    }

    move(fromX, fromY, toX, toY){
        
    }

    isValidMove(fromX, fromY, toX, toY){
        
    }
}

class Rook extends Piece{

    constructor(color){
        super("R",color);
    }

    move(fromX, fromY, toX, toY){
        
    }

    isValidMove(fromX, fromY, toX, toY){
        
    }
}

class Pawn extends Piece{

    constructor(color){
        super("P",color);
    }

    move(fromX, fromY, toX, toY){
        
    }

    isValidMove(fromX, fromY, toX, toY){
        
    }
}

