import React, { useEffect, useState } from "react";
import "./tictactoe.css";

const TicTacToe = () => {
  // An array called matrix representing the Tic-Tac-Toe grid
  //  initialized with empty strings.
  const [matrix, setMatrix] = useState(Array(9).fill(null));

  //Represents the current player's turn (either "X" or "O").
  const [isXTurn, setIsXTurn] = useState(true);
  // Creating a winner state, which indicates the current winner
  const [winner, setWinner] = useState(null);

  /* handleUserClick function is called when a cell is clicked */
  const handleUserClick = (event) => {
    //Capture box's current position of array
    const position = event.target.id;
    console.log(position); //Array index starting from 0-8 (9 boxes)
    //we have to add: x, 0, x, 0

    //copy your matrix, so we can manipulate it
    // It updates the Game state based on the current player's turn either X or O
    const copyMatrix = [...matrix];
    copyMatrix[position] = isXTurn ? "X" : "O";
    setMatrix(copyMatrix); 

    //Toggle cell/box either True or false
    setIsXTurn((prevTurn) => !prevTurn);
  };

  //checkWinner Function decides who is the winner
  const checkWinner = () => {
    //winner combinations
    const combos = [
      /* Horizonal */
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 9],
      /* Vertical  */
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
        /* Diagonal */
      [0, 4, 8],
      [2, 4, 6]
    ];

    //Loop through a standard 3x3 Tic-Tac-Toe board
    for (let i= 0 ; i< combos.length; i++) {
      //array destructuring in JavaScript to extract values from an array
      //For combos[0] = [0, 1, 2], for combos[1] = [3, 4, 5]...
      const [a, b, c] = combos[i];
      //If three values are same, then setwinner of that player
      if (matrix[a] && 
        matrix[a] === matrix[b] && 
        matrix[a] === matrix[c]) {
          {setWinner(matrix[a])};
      }
    }
  };
  //resetGame function to reset Tic Tac Toe Game
  const resetGame = () =>{
   setMatrix(Array(9).fill(null)); //Update set to null again
   setWinner(null);
  }
  //useEffect hook to track the changes in game boards
  //then invoke checkWinner()
  //first parameter - callback, 2nd parameter - array dependecies
  useEffect(() => {
    checkWinner();
  }, [matrix]);

  return (
    <div className="tictactoe-container">
      <h2>Tic Tac Toe</h2>
      {/* Event delegation */}
      <div className="board" onClick={handleUserClick}>
        {matrix.map((item, index) => (
          <div key={index} id={index} className="box">
            {item}
          </div>
        ))}
      </div>
      <div className="game-info">
        <button onClick = {resetGame}>Reset</button>
        <div>Next Player: {isXTurn ? "X" : "O"} </div>
        {/* Update the winner  */}
        {winner && <div> Player {winner} won the game!</div>}
      </div>
    </div>
  );
};

export default TicTacToe;
