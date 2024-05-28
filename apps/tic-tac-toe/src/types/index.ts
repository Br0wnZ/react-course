import { TURNS } from '../constants'

export type Turn = keyof typeof TURNS

export type WinnerModalProps = {
  winner: string | boolean | null
  resetGame: () => void
}

export type BoardProps = {
  board: string[]
  updateBoard: (index: number) => void
}

export type TurnProps = {
  turn: string
}
