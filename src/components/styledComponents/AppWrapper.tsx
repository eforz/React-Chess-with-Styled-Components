import { FC } from 'react'
import styled from 'styled-components'
import { IAppWrapperProps } from '../../interfaces/IAppWrapper'

const StyledAppWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:row;

`

const AppWrapper: FC<IAppWrapperProps> = (props) => {
  return <StyledAppWrapper>{props.children}</StyledAppWrapper>
}

export default AppWrapper