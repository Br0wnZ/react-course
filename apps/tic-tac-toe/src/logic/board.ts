import { WINNER_LINES } from '../constants'
import { Turn } from '../types'

export const checkWinner = (board: Turn[]): Turn | null => {
  for (const line of WINNER_LINES) {
    const [a, b, c] = line
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}
