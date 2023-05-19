import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Piece, PieceNames } from "./Piece";
import WhiteIcon from "../../assets/figures/queen-white.svg"
import BlackIcon from "../../assets/figures/queen-black.svg"

export class Queen extends Piece {
    constructor(pieceColor: Colors, cell: Cell) {
        super(pieceColor, cell);
        this.icon = (pieceColor === Colors.BLACK) ? WhiteIcon : BlackIcon
        this.name = PieceNames.QUEEN;
    }

    public canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        if(this.cell.isEmptyVertical(target)) {
            return true;
        }
        if(this.cell.isEmptyHorizontal(target)) {
            return true;
        }
        if(this.cell.isEmptyDiagonal(target)) {
            return true;
        }
        return false;
    }
}