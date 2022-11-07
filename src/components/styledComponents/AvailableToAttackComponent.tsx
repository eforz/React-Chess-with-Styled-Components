import { FC } from 'react'
import styled from 'styled-components'
import { IAvailableToAttackProps } from './../../interfaces/IAvailableToAttack';

const StyleAvailableToAttack = styled.div`
    background: green;
    opacity: 0.5;
    width:5px;
    height:64px;
    position:absolute;
    width: 64px;
    z-index:0;

`

const AvailableToAttackComponent: FC<IAvailableToAttackProps> = ({cell}) => {
  return (
    <StyleAvailableToAttack></StyleAvailableToAttack>
  )
}

export default AvailableToAttackComponent