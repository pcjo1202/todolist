import React, { memo } from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.header`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  padding: 1rem 0;

  h1 {
    color: #282828;
  }
`

const Header = memo(() => {
  return (
    <HeaderStyle>
      <h1>2022년 1월 1일</h1>
    </HeaderStyle>
  )
})

export default Header
