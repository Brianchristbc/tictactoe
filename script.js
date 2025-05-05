function gameBoard() {
  const rows = 3;
  const cols = 3;
  const board = [];
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i][j] = "";
    }
  }
  const getBoard = () => board;

  return { getBoard };
}

// i++ when drop piece

function gameSet() {
  const player = {
    player1: {
      name: "Player 1",
      symbol: "X",
    },
    player2: {
      name: "Player 2",
      symbol: "O",
    },
  };

  let playerInTurn;
  let i = 0;

  const setPlayer = () => {
    playerInTurn = player.player1;
    i++;
  };

  const getPlayer = () => {
    if (i % 2 == 0) {
      playerInTurn = player.player1;
    } else {
      playerInTurn = player.player2;
    }
    i++;
    return playerInTurn;
  };

  const getTicker = () => i;

  return { getPlayer, setPlayer, getTicker };
}

function gameController() {
  const setBoard = gameBoard().getBoard();
  const setGame = gameSet();
  const player = setGame.getPlayer();

  //need to figure out how to if board section is empty
  const dropPiece = (row, col) => {};

  return { setBoard, setGame };
}
