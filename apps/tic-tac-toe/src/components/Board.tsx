import { BoardProps } from '../types'
import { Square } from './Square'

export const Board = ({ board, updateBoard }: BoardProps) => {
  return (
    <section className="game">
      {board.map((square, index) => (
        <Square key={index} index={index} updateBoard={updateBoard}>
          {square}
        </Square>
      ))}
    </section>
  )
}
