import React from 'react'
import type { CheckboxProps } from './Checkbox.types'
import { StyledContainer, StyledIcon, StyledInput } from './Checkbox.styled'

function Checkbox(props: CheckboxProps) {
  const { children, className, defaultChecked, ...restProps } = props
  return (
    <StyledContainer className={className}>
      <StyledInput
        defaultChecked={defaultChecked}
        type="checkbox"
        className="peer"
        {...restProps}
      />
      <StyledIcon />
      <span>{children}</span>
    </StyledContainer>
  )
}

export default Checkbox
