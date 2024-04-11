export default function GameOver({winner, onRestart}){
    return(
        <div id="game-over">
            <h2>Game over !</h2>
            {winner && <p>{winner} Won !</p>}
            {!winner && <p>Draw !</p>}
            <p>
                <button onClick={onRestart}>
                    Re match !
                </button>
            </p>
        </div>
    )
}