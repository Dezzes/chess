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
}