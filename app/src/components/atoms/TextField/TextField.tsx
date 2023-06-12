import React from 'react'
import type { TextFieldProps } from './TextField.types'
import {
  StyledContainer,
  StyledLabel,
  StyledInput,
  StyledErrorMessageWrapper,
  StyledErrorMessage,
} from './TextField.styled'
import { HiOutlineExclamationCircle } from 'react-icons/hi2'

function TextField(props: TextFieldProps) {
  const { label, className, errorMessage = '', ...restProps } = props
  return (
    <StyledContainer className={className}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        $hasError={errorMessage.length > 0}
        {...restProps}
      />
      {errorMessage.length > 0 && (
        <StyledErrorMessageWrapper>
          <HiOutlineExclamationCircle tw="stroke-current stroke-2" />
          <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        </StyledErrorMessageWrapper>
      )}
    </StyledContainer>
  )
}

export default TextField
