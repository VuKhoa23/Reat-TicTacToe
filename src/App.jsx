import Player from "./components/Player"
function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Khoa" symbol="X"/>
          <Player  name="John" symbol="O"/>
        </ol>
      </div>
    </main>
  )
}

export default App
