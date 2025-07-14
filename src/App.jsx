import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialBoard = Array(9).fill(null);

const App = () => {
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [scores, setScores] = useState({ X: 0, O: 0 });

  useEffect(() => {
    axios.get('http://52.91.94.200:5000/api/scores')
      .then(res => setScores(res.data));
  }, []);

  const handleClick = (i) => {
    if (board[i] || winner) return;
    const newBoard = board.slice();
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
  
    const win = calculateWinner(newBoard);
    if (win) {
      setWinner(win);
      axios.post('http://52.91.94.200:5000/api/update-score', { winner: win })
        .then(res => setScores(res.data));
    } else if (!newBoard.includes(null)) {
      setWinner('Draw');
    } else {
      setXIsNext(!xIsNext);
    }
  };
  

  const calculateWinner = (b) => {
    const lines = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6],
    ];
    for (let [a, b1, c] of lines) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a];
    }
    return null;
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setWinner(null);
    setXIsNext(true);
  };

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div>Player X: {scores.X} | Player O: {scores.O}</div>
      <div className={`status ${winner ? 'winner' : ''}`}>
       {
         winner === 'Draw' ? 'It\'s a Draw! 🤝' :
          winner ? `🎉 Winner: ${winner}` :
          `Next Player: ${xIsNext ? 'X' : 'O'}`
         }
        </div>

      <div className="board">
        {board.map((val, i) => (
          <button key={i} onClick={() => handleClick(i)} className="cell">{val}</button>
        ))}
      </div>
      <button onClick={resetGame}>Reset</button>
    </div>
  );
};

export default App;
