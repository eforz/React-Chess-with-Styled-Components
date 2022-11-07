import React from 'react'
import styled from 'styled-components'

const StyledAvailable = styled.div`
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: #22c822;
`

const AvailableComponent = () => {
  return (
    <StyledAvailable></StyledAvailable>
  )
}

export default AvailableComponent