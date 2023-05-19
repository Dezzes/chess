import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Piece, PieceNames } from "./Piece";
import WhiteIcon from "../../assets/figures/rook-white.svg"
import BlackIcon from "../../assets/figures/rook-black.svg"

export class Rook extends Piece {

    isFirstMove: boolean = true;

    constructor(pieceColor: Colors, cell: Cell) {
        super(pieceColor, cell);
        this.icon = (pieceColor === Colors.BLACK) ? WhiteIcon : BlackIcon
        this.name = PieceNames.ROOK;
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
        return false;
    }
}