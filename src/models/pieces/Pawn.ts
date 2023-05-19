import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Piece, PieceNames } from "./Piece";
import WhiteIcon from "../../assets/figures/pawn-white.svg"
import BlackIcon from "../../assets/figures/pawn-black.svg"

export class Pawn extends Piece {

    constructor(pieceColor: Colors, cell: Cell) {
        super(pieceColor, cell);
        this.icon = (pieceColor === Colors.WHITE) ? WhiteIcon : BlackIcon
        this.name = PieceNames.PAWN;
    }

    public canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        
        const direction = this.cell.piece?.color === Colors.BLACK ? -1 : 1;
        const firstTurnDirection = this.cell.piece?.color === Colors.BLACK ? -2 : 2;

        if((target.y === this.cell.y + direction || (this.isFirstMove
            && (this.cell.y + firstTurnDirection === target.y)))
            && target.x === this.cell.x
            && this.cell.board.getCell(target.x, target.y).isEmpty()) {
                return true;
            }

        if(target.y === this.cell.y + direction
            && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
            && this.cell.isEnemy(target)) {
                return true;
            }

        return false;
    }

    public movePiece(target: Cell) {
        super.movePiece(target);
        this.isFirstMove = false;
    }
}