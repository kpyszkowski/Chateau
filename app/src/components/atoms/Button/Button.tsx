import React from 'react'
import type { ButtonProps } from './Button.types'
import { StyledContainer, StyledHiddenLabel } from './Button.styled'

function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    hiddenLabel = '',
    ...restProps
  } = props
  return (
    <StyledContainer
      $variant={variant}
      type="button"
      {...restProps}
    >
      {hiddenLabel && <StyledHiddenLabel>{hiddenLabel}</StyledHiddenLabel>}
      {children}
    </StyledContainer>
  )
}

export default Button
