import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./pieces/Bishop";
import { King } from "./pieces/King";
import { Knight } from "./pieces/Knight";
import { Pawn } from "./pieces/Pawn";
import { Queen } from "./pieces/Queen";
import { Rook } from "./pieces/Rook";

export class Board {
    cells: Cell[][] = [];

    public initCells() {
        for (let y = 0; y < 8; y++) {
            const row: Cell[] = [];  
            for (let x = 0; x < 8; x++) {
                if(x + y % 2 === 0) {
                    row.push(new Cell(this, x, y, Colors.WHITE, null)); // create white cell
                } else {
                    row.push(new Cell(this, x, y, Colors.BLACK, null)); // create black cell
                }
            }
            this.cells.push(row);
        }
    }

    private initPaws() {
        for (let x = 0; x < 8; x++) {
            new Pawn(Colors.WHITE, this.getCell(x, 1));
            new Pawn(Colors.BLACK, this.getCell(x, 6));
        }
    }

    private initQueens() {
        new Queen(Colors.WHITE, this.getCell(3, 0));
        new Queen(Colors.BLACK, this.getCell(3, 7)); 
    }

    private initKings() {
        new King(Colors.WHITE, this.getCell(4, 0));
        new King(Colors.BLACK, this.getCell(4, 7)); 
    }

    private initKnights() {
        new Knight(Colors.WHITE, this.getCell(1, 0));
        new Knight(Colors.WHITE, this.getCell(6, 0));
        new Knight(Colors.BLACK, this.getCell(6, 7));
        new Knight(Colors.BLACK, this.getCell(1, 7));
    }

    private initRooks() {
        new Rook(Colors.WHITE, this.getCell(0, 0));
        new Rook(Colors.WHITE, this.getCell(7, 0));
        new Rook(Colors.BLACK, this.getCell(0, 7));
        new Rook(Colors.BLACK, this.getCell(7, 7));
    }
    
    private initBishops() {
        new Bishop(Colors.WHITE, this.getCell(2, 0));
        new Bishop(Colors.WHITE, this.getCell(5, 0));
        new Bishop(Colors.BLACK, this.getCell(2, 7));
        new Bishop(Colors.BLACK, this.getCell(5, 7));
    }

    public initPieces() {
        this.initPaws();
        this.initBishops();
        this.initKnights();
        this.initRooks();
        this.initKings();
        this.initQueens();
    } 

    public highlightCells(selectedCell: Cell | null) {
       for (let i = 0; i < this.cells.length; i++) {
        const row = this.cells[i];
        for (let j = 0; j < row.length; j++) {
            const currentCell = row[j];
            currentCell.available = !!selectedCell?.piece?.canMove(currentCell);
        }
       } 
    }

    public getCopyBoard(): Board {
        const newBoard = new Board();
        newBoard.cells = this.cells;
        return newBoard
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }

}