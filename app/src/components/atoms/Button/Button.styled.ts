import tw, { styled } from 'twin.macro'
import type { ButtonVariantType } from './Button.types'

export const StyledContainer = styled.button(
  ({ $variant }: { $variant: ButtonVariantType }) => [
    tw`flex px-8 py-3 rounded-xl justify-center`,
    $variant === 'primary' && tw`bg-blue-500 text-white hover:bg-blue-600`,
    $variant === 'secondary' &&
      tw`border-2 border-current text-neutral-500 hover:text-neutral-700`,
  ],
)
