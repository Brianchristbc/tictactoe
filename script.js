const gameSettings = () => {
  const getNewBoard = () => {
    const newBoard = {};
    const rows = 3;
    const cols = 3;
    for (let i = 0; i < rows; i++) {
      newBoard[i] = [];
      for (let j = 0; j < cols; j++) {
        newBoard[i][j] = "";
      }
    }
    return newBoard;
  };
  return { getNewBoard };
};

const playerSettings = () => {
  const players = {
    player1: {
      name: "Player 1",
      ticker: "X",
    },
    player2: {
      name: "Player 2",
      ticker: "O",
    },
  };

  let currPlayer = players.player1;
  const getCurrPlayer = () => currPlayer;
  const changeCurrPlayer = () => {
    if (currPlayer == players.player1) {
      currPlayer = players.player2;
    } else {
      currPlayer = players.player1;
    }

    return currPlayer;
  };

  return { getCurrPlayer, changeCurrPlayer };
};

const gameController = () => {
  let newBoard;
  let player = playerSettings();
  currPlayer = player.getCurrPlayer();
  const loadGame = () => {
    newBoard = gameSettings().getNewBoard();

    return { newBoard };
  };

  const dropPiece = (row, col) => {
    console.log(newBoard);
    console.log(currPlayer);
    if (!newBoard[row][col]) {
      newBoard[row][col] = currPlayer.ticker;
      currPlayer = player.changeCurrPlayer();
    } else {
      alert("cell has already been filled");
    }
  };

  return { loadGame, dropPiece };
};

const winCondition = () => {
  //push this into controller later as
  // this will not be able to see where newboard is
  for (let i = 0; i < row; i++) {
    if (newBoard[i][0] == newBoard[i][1] && newBoard[i][1] == newBoard[i][2]) {
      console.log(`${currPlayer} wins`);
    }
  }
};

let myArr = ["O", "O", "O"];

let myObj = {
  0: ["X", "0", "X"],
  1: ["X", "X", "X"],
  2: ["X", "O", "X"],
};

function getRow() {
  for (let i = 0; i < Object.keys(myObj).length; i++) {
    for (let j = 0; j < myObj[i].length - 1; j++) {
      console.log(myObj[i][j] == myObj[i][j + 1]);
    }
  }
}

function getCol() {
  for (let j = 0; j < myObj[0].length; j++) {
    for (let i = 0; i < Object.keys(myObj).length - 1; i++) {
      console.log(myObj[i][j] == myObj[i + 1][j]);
    }
  }
}

//checks if all elements in a 2d array are the same (internal)
// function one() {
//   const objLength = Object.keys(myObj);
//   for (let i = 0; i < objLength.length; i++) {
//     let row = myObj[i];
//     console.log(row[]);
//     for (let j = 0; j < row.length; j++) {
//     }

//     for (let j = 0; j < row.length; j++) {
//       let rowItem = row[j];
//     }
//   }
// for (let i = 0; i < myObj.length; i++) {
//   console.log(myObj[position]);
//     if (
//       myObj[currObj] == myObj[currObj + 1] &&
//       myObj[currObj + 1] == myObj[currObj + 2]
//     ) {
//       console.log(currObj[i]);
//       console.log(`you win`);
//       return;
//     }
// }
// }
// for (let i = 0; i < myArr.length; i++) {
//   for (let j = 0; j<myArr[0].length;)
//   if (myArr[i] == myArr[i + 1] && myArr[i + 1] == myArr[i + 2]) {
//     console.log(myArr[i]);
//     console.log(`you win`);
//     return;
//   }
// }
// }
