import React from 'react'
import type { ButtonProps } from './Button.types'
import { StyledContainer } from './Button.styled'

function Button(props: ButtonProps) {
  const { children, variant = 'primary', ...restProps } = props
  return (
    <StyledContainer
      $variant={variant}
      {...restProps}
    >
      {children}
    </StyledContainer>
  )
}

export default Button
