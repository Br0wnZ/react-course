import confetti from 'canvas-confetti'
import { useState } from 'react'
import { Board } from '../components/Board'
import { PlayerTurn } from '../components/Turn'
import { WinnerModal } from '../components/WinnerModal'
import { TURNS } from '../constants'
import { checkWinner } from '../logic/board'
import { Turn } from '../types'

export function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState<Turn | boolean | null>(null)

  const updateBoard = (index: number) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
      setWinner(newWinner)
    } else if (!newBoard.includes(null)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset game</button>
      <Board board={board} updateBoard={updateBoard} />
      <PlayerTurn turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
