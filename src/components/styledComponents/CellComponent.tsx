/* eslint-disable jsx-a11y/alt-text */
import { FC } from 'react'
import styled from 'styled-components'
import { ICellComponentProps } from '../../interfaces/ICell'
import AvailableComponent from './AvailableComponent'


const StyledCell = styled.div<ICellComponentProps>`
    img {
      width: 48px;
      height: 48px;
      position: relative;
    }
    position:relative;
    width: 64px;
    height: 64px;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backgr}; // deepskyblue - black, #eed4ac - white
    background-color: ${props => props.available ? 'green' : ''};
    border: ${({ selected }) => selected ? '5px solid brown' : ''};
`

const CellComponent: FC<ICellComponentProps> = ({cell, selected, backgr, click, available}) => {
  console.log(cell.available)
  return (
    <StyledCell 
      click={click} 
      selected={selected} 
      backgr={backgr} 
      available={cell.available && cell.figure ? 'green' : ''}
      cell={cell} 
      onClick={() => click(cell)
    }>
      {cell.available && !cell.figure && <AvailableComponent/>}
      {cell.figure?.logo && <img src={cell.figure.logo}></img>}
    </StyledCell>
  )
}

export default CellComponent