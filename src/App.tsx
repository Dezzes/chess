import React from 'react';
import './App.css';
import { Board } from './models/Board';
import { BoardComponent } from './components/BoardComponent';
import { Player } from './models/Player';
import { Colors } from './models/Colors';

function App() {
  const [board, setBoard] = React.useState(new Board());
  const [whitePlayer, setWhitePlayer] = React.useState<Player>(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = React.useState<Player>(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = React.useState<Player | null>(null);
  
  React.useEffect(() => {
    restart();
    setCurrentPlayer(blackPlayer);
  }, [])
  
  function restart() {
    const board = new Board();
    board.initCells();
    board.initPieces();
    setBoard(board);
  }

  function swapPlayer() {
    // setCurrentPlayer(blackPlayer)
    setCurrentPlayer(currentPlayer?.color === Colors.BLACK ? whitePlayer : blackPlayer)
  }
  return (
    <BoardComponent
      board={board}
      setBoard={setBoard}
      swapPlayer={swapPlayer}
      currentPlayer={currentPlayer}
    />
  );
}

export default App;
