
export default function Gameboard({onSelectCell, board}) {

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) =>
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
