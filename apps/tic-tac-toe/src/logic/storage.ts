import { GameStatus } from '../types'

export const saveGameToStorage = ({ board, turn }: GameStatus) => {
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
}

export const cleanGameStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
