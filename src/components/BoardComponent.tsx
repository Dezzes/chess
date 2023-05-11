import React from 'react'
import { Board } from '../models/Board'
import { CellComponent } from './CellComponent';

interface Props {
    board: Board;
    setBoard: (board: Board) => void;
}

export const BoardComponent: React.FC<Props> = ({board, setBoard}) => {
  return (
    <div className="board">
        {board.cells.map((row, index) => (
            <React.Fragment key={index}>
                {row.map((cell) => (
                    <CellComponent key={cell.id} cell={cell}/>
                ))}
            </React.Fragment>
        ))}
    </div>
  )
}
