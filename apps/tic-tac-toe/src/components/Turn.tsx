import { TURNS } from '../constants'
import { TurnProps } from '../types'
import { Square } from './Square'

export const PlayerTurn = ({ turn }: TurnProps) => {
  return (
    <section className="turn">
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
  )
}
