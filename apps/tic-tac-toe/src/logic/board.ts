import { WINNER_COMBOS } from '../constants'
import { Turn } from '../types'

export const checkWinner = (boardToCheck: Turn[]): Turn | null => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
      return boardToCheck[a]
    }
  }
  return null
}
