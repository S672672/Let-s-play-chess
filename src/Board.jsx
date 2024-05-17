import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => {
  const renderSquare = (i) => (
    <Square key={i} value={squares[i]} onClick={() => onClick(i)} />
  );

  const createBoard = () => {
    let board = [];
    for (let row = 0; row < 8; row++) {
      let rowSquares = [];
      for (let col = 0; col < 8; col++) {
        rowSquares.push(renderSquare(row * 8 + col));
      }
      board.push(
        <div key={row} className="flex">
          {rowSquares}
        </div>
      );
    }
    return board;
  };

  return <div className="inline-block">{createBoard()}</div>;
};

export default Board;
