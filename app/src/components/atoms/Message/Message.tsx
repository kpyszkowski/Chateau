import React from 'react'
import type { MessageProps } from './Message.types'
import {
  StyledContainer,
  StyledMessage,
  StyledTimeStamp,
} from './Message.styled'

function Message(props: MessageProps) {
  const { children, variant = 'sender', timeStamp, ...restProps } = props
  return (
    <StyledContainer
      $itemsAlignment={variant === 'sender' ? 'right' : 'left'}
      {...restProps}
    >
      <StyledMessage $variant={variant}>{children}</StyledMessage>
      <StyledTimeStamp>{timeStamp}</StyledTimeStamp>
    </StyledContainer>
  )
}

export default Message
