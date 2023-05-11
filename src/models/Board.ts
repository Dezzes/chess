import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { King } from "./pieces/King";

export class Board {
    cells: Cell[][] = [];

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = [];  
            for (let j = 0; j < 8; j++) {
                if(i + j % 2 === 0) {
                    row.push(new Cell(this, i, j, Colors.WHITE, null)); // create white cell
                } else {
                    row.push(new Cell(this, i, j, Colors.BLACK, null)); // create black cell
                }
            }
            this.cells.push(row);
        }
    }

    public getCell(i: number, j: number) {
        return this.cells[i][j];
    }

    public initPieces() {
        new King(Colors.BLACK, this.getCell(3, 1));
    } 
}