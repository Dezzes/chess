import React from 'react'
import { Cell } from '../models/Cell'

interface Props {
    cell: Cell;
    isSelected: boolean;
    cellSelectedHandler: (cell: Cell) => void;
}

export const CellComponent: React.FC<Props> = ({cell, isSelected, cellSelectedHandler}) => {

  return (
    <div
      onClick={() => cellSelectedHandler(cell)}
      className={[
        "cell",
        cell.piece?.name ? cell.piece?.name : "",
        cell.piece?.color ? cell.piece?.color : "",
        isSelected ? "selected" : "",
      ].join(" ").trim()}>
      {cell.available && <div className={[
        "move-dest", cell.piece ? "occupied" : "",
      ].join(" ").trim()}></div>}
      
    </div>
  )
}
