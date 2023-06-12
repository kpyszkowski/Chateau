import React from 'react'
import { StyledContainer, StyledWrapper } from './GuestLayout.styled'
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2'
import 'twin.macro'

function Layout(props) {
  const { children, ...restProps } = props
  return (
    <StyledContainer {...restProps}>
      <StyledWrapper>
        <div tw="flex flex-col gap-2 items-center text-4xl text-black">
          <HiOutlineChatBubbleOvalLeftEllipsis tw="stroke-current w-12 h-12" />
          Chateau
        </div>
        {children}
      </StyledWrapper>
    </StyledContainer>
  )
}

export default Layout
