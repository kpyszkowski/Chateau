import React from 'react'
import type { AvatarProps } from './Avatar.types'
import { StyledContainer, StyledStatusIndicator } from './Avatar.styled'

function Avatar(props: AvatarProps) {
  const {
    name,
    isAvaliable = false,
    showStatus = false,
    isLarge = false,
    ...restProps
  } = props
  const nameInitial = name[0].toUpperCase()
  return (
    <StyledContainer
      $isLarge={isLarge}
      {...restProps}
    >
      {nameInitial}
      {showStatus && <StyledStatusIndicator $isGreen={isAvaliable} />}
    </StyledContainer>
  )
}

export default Avatar
