import React, { memo } from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  height: 80vh;
  background: #fcfcfc;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`
const TodoContainer = memo(({ children }) => {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
})

export default TodoContainer
