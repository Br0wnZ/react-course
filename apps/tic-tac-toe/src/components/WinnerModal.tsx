import { WinnerModalProps } from '../types'
import { Square } from './Square'

export const WinnerModal = ({ winner, resetGame }: WinnerModalProps) => {
  const winnertext = !winner ? 'Draw' : 'The winner is: '
  return (
    winner !== null && (
      <section className="winner">
        <div className="text">
          <h2>{winnertext}</h2>
          <header className="win">{winner && <Square>{winner}</Square>}</header>
          <footer>
            <button onClick={resetGame}>Restart</button>
          </footer>
        </div>
      </section>
    )
  )
}
