import Gameboard from "./components/Gameboard"
import Log from "./components/Log"
import Player from "./components/Player"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning_combinations"
import GameOver from "./components/GameOver"

const initGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X"
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = 'O';
  }
  return currentPlayer
}

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    Y: "Player 2"
  })
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = derivedActivePlayer(gameTurns)

  let gameBoard = [...initGameboard.map(row => [...row])]
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner = null
  for (const combination of WINNING_COMBINATIONS) {
    const firstCell = gameBoard[combination[0].row][combination[0].column];
    const secondCell = gameBoard[combination[1].row][combination[1].column];
    const thirdCell = gameBoard[combination[2].row][combination[2].column];
    if (firstCell && firstCell === secondCell && firstCell === thirdCell) {
      winner = players[firstCell]
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;
  const handleRematch = () => {
    setGameTurns([])
  }

  const handlePlayerNameChanged = (symbol, newName) => {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  const handleSelectCell = (rowIndex, colIndex) => {

    setGameTurns(prevTurns => {
      const currentPlayer = derivedActivePlayer(prevTurns)
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns]
      return updatedTurns
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initName="Player 1" symbol="X" isActive={activePlayer === "X"} onNameChanged={handlePlayerNameChanged} />
          <Player initName="Player 2" symbol="O" isActive={activePlayer === "O"} onNameChanged={handlePlayerNameChanged} />
        </ol>
        <Gameboard onSelectCell={handleSelectCell} board={gameBoard} />
      </div>
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRematch} />}
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
