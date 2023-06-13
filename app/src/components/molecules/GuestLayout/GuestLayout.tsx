import React from 'react'
import { StyledContainer, StyledWrapper } from './GuestLayout.styled'

function Layout(props) {
  const { children, ...restProps } = props
  return (
    <StyledContainer {...restProps}>
      <StyledWrapper>{children}</StyledWrapper>
    </StyledContainer>
  )
}

export default Layout
