import React from 'react';
import './App.css';
import { Board } from './models/Board';
import { BoardComponent } from './components/BoardComponent';

function App() {
  const [board, setBoard] = React.useState(new Board());

  React.useEffect(() => {
    restart();
  }, [])
  
  function restart() {
    const board = new Board();
    board.initCells();
    board.initPieces();
    setBoard(board);
  }
  return (
    <BoardComponent board={board} setBoard={setBoard}/>
  );
}

export default App;
