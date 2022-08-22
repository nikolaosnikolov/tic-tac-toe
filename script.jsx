const Square = ({ id, player }) => {
    const [color, setColor] = React.useState('green')
    const palet = ['red', 'green', 'yellow']
    const getRandomColor = () => {
        return palet[Math.floor(Math.random() * 3)]
    }
    React.useEffect(() => {
        console.log(`Render ${id}`)
        return () => console.log(`unmounting Square ${id}`)
    })

    return (
        <button
            onClick={(e) => {
                let myColor = getRandomColor()
                setColor(myColor)
                e.target.style.background = myColor;
            }}
        >
            <h1>{player}</h1>
        </button>
    )
}

const Board = () => {
    const [player, setPlayer] = React.useState(1);
    const [mounted, setMounted] = React.useState(true)
    const [random, setRandom] = React.useState(0)
    let status = `Player ${player}`;
    const toggle = () => setMounted(!mounted)
    const reRender = () => {
        console.log('vhdjhvds')
        setRandom(Math.random())
    }
    const renderSquare = (i) => {
        return <Square id={i} player={player}></Square>
    }
    return (
        <div className="game-board">
            <div className="grid-row">
                {mounted && renderSquare(0)}
                {mounted && renderSquare(1)}
                {mounted && renderSquare(2)}
            </div>
            <div id="info">
                <button onClick={toggle}>Show/Hide Row</button>
                <button onClick={reRender}>Re-render</button>
                <h1>{status}</h1>
            </div>
        </div>
    );
};

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Board />)