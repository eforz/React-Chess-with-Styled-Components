import React, { FC } from 'react'
import { createGlobalStyle } from 'styled-components'
import { IGlobal } from '../../interfaces/IGlobal'

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: black;
}
`

const Global: FC<IGlobal> = () => {
  return <GlobalStyles/>
}

export default Global