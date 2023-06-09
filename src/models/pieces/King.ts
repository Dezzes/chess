import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Piece, PieceNames } from "./Piece";
import WhiteIcon from "../../assets/figures/king-white.svg"
import BlackIcon from "../../assets/figures/king-black.svg"

export class King extends Piece {

    constructor(pieceColor: Colors, cell: Cell) {
        super(pieceColor, cell);
        this.icon = (pieceColor === Colors.BLACK) ? WhiteIcon : BlackIcon
        this.name = PieceNames.KING;
    }

    public canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }

        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);

        if((dx === 1 && dy === 1) || (dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {
            return true;
        }

        return false;
    }
}