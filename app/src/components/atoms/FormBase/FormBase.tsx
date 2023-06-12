import React from 'react'
import type { FormBaseProps } from './FormBase.types'
import {
  StyledContainer,
  StyledDescription,
  StyledHeading,
  StyledWrapper,
} from './FormBase.styled'

function FormBase(props: FormBaseProps) {
  const { children, heading, description, ...restProps } = props
  return (
    <StyledContainer {...restProps}>
      <StyledHeading>{heading}</StyledHeading>
      <StyledDescription>{description}</StyledDescription>
      <StyledWrapper>{children}</StyledWrapper>
    </StyledContainer>
  )
}

export default FormBase
