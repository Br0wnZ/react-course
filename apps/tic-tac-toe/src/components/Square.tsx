export type SquareType = Partial<{
  children: React.ReactNode
  updateBoard: (index: number) => void
  isSelected: boolean
  index: number
}>

export const Square = ({ children, updateBoard, isSelected, index }: SquareType) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard!(index as number)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
