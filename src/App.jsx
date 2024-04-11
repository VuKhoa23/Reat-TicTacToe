import Gameboard from "./components/Gameboard"
import Log from "./components/Log"
import Player from "./components/Player"
import { useState } from "react"

function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X"
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = 'O';
  }
  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = derivedActivePlayer(gameTurns)

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
          <Player initName="Khoa" symbol="X" isActive={activePlayer === "X"} />
          <Player initName="John" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <Gameboard onSelectCell={handleSelectCell} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
