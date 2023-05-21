import React from 'react';
import './App.css';
import { Board } from './models/Board';
import { BoardComponent } from './components/BoardComponent';
import { Player } from './models/Player';
import { Colors } from './models/Colors';

function App() {
  const [board, setBoard] = React.useState(new Board());
  const [whitePlayer] = React.useState<Player>(new Player(Colors.WHITE));
  const [blackPlayer] = React.useState<Player>(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = React.useState<Player | null>(null);
  
  React.useEffect(() => {
    restart();
    setCurrentPlayer(blackPlayer);
  }, [])

  React.useEffect(() => {
  }, [currentPlayer])
  
  function restart() {
    const board = new Board();
    board.initCells();
    board.initPieces();
    setBoard(board);
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
}

  function swapPlayer() {
    // setCurrentPlayer(blackPlayer)
    const player = currentPlayer?.color === Colors.BLACK ? whitePlayer : blackPlayer
    setCurrentPlayer(player);
    board.isPlayerInCheck(player);
    console.log(`player ${player.color} in check`, player.isInCheck);
  }
  return (
    <BoardComponent
      board={board}
      updateBoard={updateBoard}
      swapPlayer={swapPlayer}
      currentPlayer={currentPlayer}
    />
  );
}

export default App;
