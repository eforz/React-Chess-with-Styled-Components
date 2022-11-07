import { FC } from 'react'
import styled from 'styled-components';
import { IFlexProps } from '../../interfaces/Iflex';

const StyledFlex = styled.div<IFlexProps>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'} ;
    align-items: ${props => props.align || 'stretch'} ;
    justify-content: ${props => props.justify || 'stretch'} ;
    margin: ${({margin}) => margin || '30px'} ;
    width: ${({width}) => width || 'auto'};
    height: ${({height}) => height || 'auto'};
`

const Flex: FC<IFlexProps> = (props) => {
  return <StyledFlex {...props}>{props.children}</StyledFlex>
}

export default Flex