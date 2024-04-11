const initGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function Gameboard({onSelectCell, turns}) {
    let gameBoard = initGameboard
    for(const turn of turns){
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) =>
            (
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) =>
                        (
                            <li key={colIndex}>
                                <button disabled={col !== null} onClick={()=>{onSelectCell(rowIndex, colIndex)}}>{col}</button>
                            </li>
                        )
                        )}
                    </ol>
                </li>
            )
            )}
        </ol>
    )
}
