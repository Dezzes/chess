import React from 'react'
import { Cell } from '../models/Cell'

interface Props {
    cell: Cell;
}

export const CellComponent: React.FC<Props> = ({cell}) => {
  return (
    <div className="cell">cell</div>
  )
}
