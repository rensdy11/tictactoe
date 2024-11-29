const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');
const restartButton = document.querySelector('.restart');

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let playedCells = Array(9).fill('');
let currentPlayer = 'X';
let gameRunning = true;

function handleClick(event) {
  const cell = event.target;
  const index = cell.dataset.index;

  if (playedCells[index] !== '' || !gameRunning) return;

  playedCells[index] = currentPlayer;
  cell.textContent = currentPlayer;

  if (checkWin()) {
    message.textContent = `${currentPlayer} Ticcedie Taccedie Toe'd his way to being a winner! damn!`;
    gameRunning = false;
    alert(`${currentPlayer} has swag!
        ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠀⠀⠀⠀⠀⠀⣀⠀⣴⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠼⠃⠀⠀⠀⠀⣠⣾⣿⠠⢿⡏⢿⡆⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⢰⣶⠁⠀⠀⢠⣾⣿⡿⠋⠀⠀⠠⣼⣿⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⣼⡿⠀⠀⠀⢸⣿⣯⣀⠀⠀⠀⠀⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠈⠻⣿⣿⣷⡄⠀⣀⠀⢻⣿⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⢰⣿⡇⠀⠀⠀⠀⠀⠈⠛⢿⡇⢹⣿⣄⣸⣿⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠁⠈⢿⣿⣿⠟⠀⢸⣶⡆⢠⣶⣶
        ⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⢸⣿⠉
        ⢿⣷⣿⣷⣾⣿⣆⢸⣿⡇⠀⣿⣏⢠⣿⣿⣿⡆⠀⣠⣿⣿⣷⡄⢸⣿⡇⣿⣿⡇
        ⠸⣿⠙⣿⡏⢻⣿⠀⣿⣧⢰⣿⡇⣾⣿⡀⠛⠛⢀⣿⡟⠉⣿⡇⢸⣿⠊⣿⡏⠀
        ⠀⢻⡆⢻⣧⠸⣿⡄⠸⣿⣸⣿⠀⠸⣿⣿⣿⣆⢸⣿⣷⣾⣿⡇⣼⡟⢠⡿⠀⠀
        ⠀⠀⠻⠌⣿⡄⣿⡇⠀⢿⣿⣿⠀⣀⣈⠙⢿⣿⢸⣿⡄⣠⣤⢀⣿⢃⡾⠃⠀⠀
        ⠀⠀⠀⠀⠈⠑⠘⠿⠀⠘⣿⡟⠀⠹⣿⣶⣿⠇⠘⣿⣿⡿⠁⠘⠋⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢤⣿⡇⠀⠀⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`)
    return;
  }

  if (playedCells.every(cell => cell !== '')) {
    message.textContent = 'draw!';
    gameRunning = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  message.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWin() {
  return winCombinations.some(combination => {
    return combination.every(index => {
      return playedCells[index] === currentPlayer;
    });
  });
}

function restartGame() {
  playedCells = Array(9).fill('');
  currentPlayer = 'X';
  gameRunning = true;
  message.textContent = `Player ${currentPlayer}'s turn`;
  cells.forEach(cell => cell.textContent = '');
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartButton.addEventListener('click', restartGame);


