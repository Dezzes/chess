import icon from '../../assets/figures/pawn-black.svg';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

export enum PieceNames {
    PIECE = "piece",
    KING = "king",
    QUEEN = "queen",
    BISHOP = "bishop",
    KNIGHT = "knight",
    ROOK = "rook",
    PAWN = "pawn"
}

export class Piece {
    icon: typeof icon | null;
    pieceColor: Colors;
    cell: Cell;
    name: PieceNames;

    constructor(color: Colors, cell: Cell) {
        this.icon = icon;
        this.pieceColor = color;
        this.cell = cell;
        this.name = PieceNames.PIECE;
    }
}