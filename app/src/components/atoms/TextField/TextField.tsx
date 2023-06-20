import React from 'react'
import type { TextFieldProps } from './TextField.types'
import {
  StyledContainer,
  StyledLabel,
  StyledInput,
  StyledInputWrapper,
  StyledButton,
  StyledErrorMessageWrapper,
  StyledErrorMessage,
} from './TextField.styled'
import { HiOutlineExclamationCircle } from 'react-icons/hi2'

function TextField(props: TextFieldProps) {
  const {
    label,
    className,
    errorMessage = '',
    isLabelHidden = false,
    buttonCallback,
    buttonIcon: ButtonIcon,
    buttonLabel,
    ...restProps
  } = props

  const isButtonVisible = [buttonLabel, buttonCallback, ButtonIcon].every(
    (prop) => prop !== undefined,
  )
  return (
    <StyledContainer className={className}>
      <StyledLabel $isHidden={isLabelHidden}>{label}</StyledLabel>
      <StyledInputWrapper $hasBorder={isButtonVisible}>
        <StyledInput
          $hasError={errorMessage.length > 0}
          $hasSibling={isButtonVisible}
          {...restProps}
        />
        {isButtonVisible && (
          <StyledButton onClick={buttonCallback}>
            <span tw="sr-only">{buttonLabel}</span>
            <ButtonIcon size={24} />
          </StyledButton>
        )}
      </StyledInputWrapper>
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
