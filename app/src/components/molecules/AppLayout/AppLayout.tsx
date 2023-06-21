import React from 'react'
import {
  StyledContainer,
  StyledAsideWrapper,
  StyledWrapper,
} from './AppLayout.styled'
import type { AppLayoutProps } from './AppLayout.types'

function AppLayout(props: AppLayoutProps) {
  const { children, renderAside, ...restProps } = props
  return (
    <StyledContainer {...restProps}>
      <StyledAsideWrapper>{renderAside()}</StyledAsideWrapper>
      <StyledWrapper>{children}</StyledWrapper>
    </StyledContainer>
  )
}

export default AppLayout
