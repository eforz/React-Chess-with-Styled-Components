import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { IBoardComponentProps } from '../../interfaces/IBoard'
import { Cell } from '../../models/ClassCell'
import { Colors } from '../../models/Colors'
import CellComponent from './CellComponent'

const StyledBoard = styled.div`
    width: calc(64px * 8);
    height: calc(64px * 8);
    display: flex;
    flex-wrap:wrap;
`

const BoardComponent: FC<IBoardComponentProps> = ({children, board, setBoard, swapPlayer, currentPlayer}) => {
  // const dispatch = useAppDispatch();
  // const {setBoard} = boardSlice.actions
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  function clickHandler(cell: Cell) {
    if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      swapPlayer()
      setSelectedCell(null);
    } else {
      if(cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  useEffect(() => {
    hightlightsCells()
  }, [selectedCell])
    
  function hightlightsCells() {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <StyledBoard>
      <h3>Current Player : {currentPlayer?.color === Colors.WHITE ? 'White' : 'Black'}</h3>
      <StyledBoard>
            {board.cells.map( (row, index) => 
              <React.Fragment key={index}>
                {row.map(cell =>
                    <CellComponent 
                      click={clickHandler}
                      cell={cell} 
                      key={cell.id} 
                      backgr={cell.color}
                      selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                    />
                )}
              </React.Fragment> 
            )}
      </StyledBoard>
        
    </StyledBoard>
  )
    
}
export default BoardComponent