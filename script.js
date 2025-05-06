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

  const dropPiece = (rol, col) => {
    console.log(newBoard);
    console.log(currPlayer);
    newBoard[rol][col] = currPlayer.ticker;
    currPlayer = player.changeCurrPlayer();
  };

  return { loadGame, dropPiece };
};
