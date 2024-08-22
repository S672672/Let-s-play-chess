import React, { useState } from 'react';
import Board from './Board';


const kingHasLegalMoves = (squares, kingPosition) => {

  return true; 
};

const Game = () => {
  const [squares, setSquares] = useState(Array(64).fill(null));
  const [isWhiteNext, setIsWhiteNext] = useState(true);

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = isWhiteNext ? '♙' : '♟';
    setSquares(newSquares);
    setIsWhiteNext(!isWhiteNext);
  };

  const calculateWinner = (squares) => {
    const whiteKingPosition = squares.indexOf('♔');
    const blackKingPosition = squares.indexOf('♚');

    // Check if the kings have any legal moves left
    if (whiteKingPosition !== -1 && !kingHasLegalMoves(squares, whiteKingPosition)) {
      return 'Black';
    }
    if (blackKingPosition !== -1 && !kingHasLegalMoves(squares, blackKingPosition)) {
      return 'White';
    }

    return null;
  };

  const winner = calculateWinner(squares);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="text-2xl mb-4">
        {winner ? `Winner: ${winner}` : 'Next player: ' + (isWhiteNext ? 'White' : 'Black')}
      </div>
      <div className="border-4 border-gray-700">
        <Board squares={squares} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Game;
