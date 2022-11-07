import { FC } from 'react'
import styled from 'styled-components'
import { ILostFigures } from '../../interfaces/ILostFigures'

const StyledLost = styled.div<ILostFigures>`
    box-sizing:border-box;
    height: calc(56vh - 60px);
    padding: 30px;
    width: 150px;
    background: lightgray;
    img {
        width: 20px;
        height: 20px;
    };
    text-align:center;
`

const LostFigures: FC<ILostFigures> = ({title, figures}) => {
  return (
    <StyledLost>
        <h3>{title}</h3>
        {figures?.map(figure => (
            <div key={figure.id}>
                {figure.name} {figure.logo && <img src={figure.logo}/>}
            </div>
        ))}
    </StyledLost>
  )
}

export default LostFigures