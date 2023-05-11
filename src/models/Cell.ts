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
}