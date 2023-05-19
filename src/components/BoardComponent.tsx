import React, { useEffect } from 'react'
import { Board } from '../models/Board'
import { CellComponent } from './CellComponent';
import { Cell } from '../models/Cell';
import { Player } from '../models/Player';

interface Props {
    board: Board;
    currentPlayer: Player | null;
    setBoard: (board: Board) => void;
    swapPlayer: () => void
}

export const BoardComponent: React.FC<Props> = ({board, currentPlayer, swapPlayer, setBoard}) => {

    const [selectedCell, setSelectedCell] = React.useState<Cell | null>(null);

    function cellSelectedHandler(cell: Cell) {
        if(selectedCell && selectedCell !== cell && selectedCell.piece?.canMove(cell)) {
            selectedCell.movePiece(cell);
            setSelectedCell(null);
            swapPlayer();
        } else {
            if(currentPlayer?.color === cell.piece?.color) {
                setSelectedCell(cell);
            }
        }
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    function highlightCells() {
        board.highlightCells(selectedCell);
        updateBoard();
    }

    useEffect(() => {
        highlightCells();

    }, [selectedCell])
    
    return (
    <div className="board">
        {board.cells.map((row, index) => (
            <React.Fragment key={index}>
                {row.map((cell) => (
                    <CellComponent
                        cellSelectedHandler={cellSelectedHandler}
                        key={cell.id}
                        cell={cell}
                        isSelected={selectedCell?.x === cell.x && selectedCell.y === cell.y}
                    />
                ))}
            </React.Fragment>
        ))}
    </div>
    )
}
