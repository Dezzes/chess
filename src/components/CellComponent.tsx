import React from "react";
import { Cell } from "../models/Cell";
import { PieceNames } from "../models/pieces/Piece";
import { Player } from "../models/Player";

interface Props {
  cell: Cell;
  isSelected: boolean;
  cellSelectedHandler: (cell: Cell) => void;
  currentPlayer: Player | null;
}

export const CellComponent: React.FC<Props> = ({
  cell,
  isSelected,
  currentPlayer,
  cellSelectedHandler,
}) => {
  return (
    <>
      <div
        onClick={() => cellSelectedHandler(cell)}
        className={[
          "cell",
          cell.piece?.name ? cell.piece?.name : "",
          cell.piece?.color ? cell.piece?.color : "",
          isSelected ? "selected" : "",
        ]
          .join(" ")
          .trim()}
      >
        {cell.available && (
          <div
            className={["move-dest", cell.piece ? "occupied" : ""]
              .join(" ")
              .trim()}
          ></div>
        )}
      </div>
      {currentPlayer?.isInCheck &&
        cell.piece?.name === PieceNames.KING &&
        cell.piece.color === currentPlayer?.color && (
          <div style={{transform: `translate(${cell.x * 100}%, ${cell.y * 100}%)`}} className="check"></div>
        )}
    </>
  );
};
