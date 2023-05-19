import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Piece, PieceNames } from "./Piece";
import WhiteIcon from "../../assets/figures/knight-white.svg"
import BlackIcon from "../../assets/figures/knight-black.svg"

export class Knight extends Piece {
    constructor(pieceColor: Colors, cell: Cell) {
        super(pieceColor, cell);
        this.icon = (pieceColor === Colors.WHITE) ? WhiteIcon : BlackIcon
        this.name = PieceNames.KNIGHT;
    }

    public canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }

        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);

        return (dx === 2 && dy === 1) || (dy === 2 && dx === 1);
    }

}