import { Board } from "./Board";
import { Colors } from "./Colors";
import { Piece } from "./pieces/Piece";

export class Cell {

    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    readonly id: number;

    piece: Piece | null;
    available: boolean;
    board: Board;

    constructor(board: Board, x: number, y: number, color: Colors, piece: Piece | null) {
        this.x = x;
        this.y = y;
        this.board = board;
        this.color = color;
        this.piece = piece;
        this.available = false;
        this.id = Math.random();
    }

    private setPiece(piece: Piece) {
        this.piece = piece;
        this.piece.cell = this;
    }

    public movePiece(target: Cell) {
        if(this.piece && this.piece.canMove(target)) {
            this.piece.movePiece(target);
            target.setPiece(this.piece);
            this.piece = null;
        }
    }

    public isEmpty(): boolean {
        return this.piece === null;
    }

    public isEnemy(target: Cell): boolean {
        if(target.piece) {
            return this.piece?.color !== target.piece.color
        }
        return false;
    }

    public isEmptyHorizontal(target: Cell) {
        if(target.y !== this.y) {
            return false
        }

        const min = Math.min(this.x, target.x);
        const max = Math.max(this.x, target.x);

        for (let x = min + 1; x < max; x++) {
            if(!this.board.getCell(x, this.y).isEmpty()) {
                return false;
            }
        }

        return true;
    }

    public isEmptyVertical(target: Cell) {
        if(target.x !== this.x) {
            return false
        }

        const min = Math.min(this.y, target.y);
        const max = Math.max(this.y, target.y);

        for (let y = min + 1; y < max; y++) {
            if(!this.board.getCell(this.x, y).isEmpty()) {
                return false;
            }
        }

        return true;
    }

    public isEmptyDiagonal(target: Cell) {
        const absX = Math.abs(target.x - this.x);
        const absY = Math.abs(target.y - this.y);
        if(absX !== absY) {
            return false;
        }

        const dy = this.y < target.y ? 1 : -1;
        const dx = this.x < target.x ? 1 : -1;

        for (let i = 1; i < absY; i++) {
            if(!this.board.getCell(this.x + dx*i, this.y + dy * i).isEmpty()){
                return false;
            }
        }
        return true;
    }
    
}