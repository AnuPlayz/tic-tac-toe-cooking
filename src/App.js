import './App.css';
import React from 'react';

export function Box({ triggeredBy, onClick }) {
  return (
    <div className="box" onClick={onClick}>
      <span>{triggeredBy}</span>
    </div>
  );
}//now u make a reset button without my help ;-;
//open cmd
//type this
//git clone https://put the link here
//after this open it the folder and run cmd there
// npm i yarn -g # for installing yarn 
// yarn # for installing our project packages
// yarn start # for running the website
//run above commands to start the code
//if u encounter any problem dm me @ discord ;-;
//how to access from github tho ;-;
//;-; its because we are putting onClick on a custom cos
function App() {
  const [board, setBoard] = React.useState([
    "", "", "",
    "", "", "",
    "", "", "",
  ])

  const handlePress = (index) => {
    console.log("Pressed ", index)
    //Step 1: Make a copy of the board
    const newBoard = [...board];
    //Step 2: Update the copy if that index is empty
    if (newBoard[index] === "") {
      newBoard[index] = "X";
    }
    //Step 3: Update the state
    setBoard(newBoard);
    //Step 4: Check if the game is over
    let winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < winLines.length; i++) {
      let [a, b, c] = winLines[i];
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        alert("Game Over, Winner is " + newBoard[a]);
        return //ok so its working?,.ok, why only 8 boxes on output  inspect it
      }
    }
    //Step 5: Make a move by the computer
    let emptySquares = [];
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] === "") {
        emptySquares.push(i);
      }
    }
    if (emptySquares.length === 0) {
      alert("Game Over, no winner");
      return
    }
    let randomIndex = Math.floor(Math.random() * emptySquares.length);
    let randomSquare = emptySquares[randomIndex];
    newBoard[randomSquare] = "O";
    setBoard(newBoard);
  }

  return (
    <div className="App">
      <h1>urmom is bought by urdad who came with the milk</h1>
      <div className="board">
        <Box triggeredBy={board[0]} onClick={() => handlePress(0)} />
        <Box triggeredBy={board[1]} onClick={() => handlePress(1)} />
        <Box triggeredBy={board[2]} onClick={() => handlePress(2)} />
        <Box triggeredBy={board[3]} onClick={() => handlePress(3)} />
        <Box triggeredBy={board[4]} onClick={() => handlePress(4)} />
        <Box triggeredBy={board[5]} onClick={() => handlePress(5)} />
        <Box triggeredBy={board[6]} onClick={() => handlePress(6)} />
        <Box triggeredBy={board[7]} onClick={() => handlePress(7)} />
        <Box triggeredBy={board[8]} onClick={() => handlePress(8)} />
      </div>
    </div>
  );
}

export default App;
