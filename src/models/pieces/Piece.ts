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

    isFirstMove: boolean = true;
    icon: typeof icon | null;
    color: Colors;
    cell: Cell;
    name: PieceNames;
        
    constructor(color: Colors, cell: Cell) {
        this.icon = null;
        this.color = color;
        this.cell = cell;
        this.cell.piece = this;
        this.name = PieceNames.PIECE;
    }

    public canMove(cell: Cell): boolean {
        if(cell.piece?.color === this.color) {
            return false;
        }
        if(cell.piece?.name === PieceNames.KING) {
            return false;
        }
        return true;
    }
    public movePiece(target: Cell) {
    }
}