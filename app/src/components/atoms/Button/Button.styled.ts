import tw, { styled } from 'twin.macro'
import type { ButtonVariantType } from './Button.types'

export const StyledContainer = styled.button(
  ({ $variant }: { $variant: ButtonVariantType }) => [
    tw`flex gap-4 items-center px-8 py-3 rounded-xl justify-center outline-0 focus-visible:(ring-2 ring-offset-2)`,
    $variant === 'primary' &&
      tw`bg-blue-400 text-white hover:bg-blue-500 focus-visible:bg-blue-500`,
    $variant === 'secondary' &&
      tw`border-2 border-current text-neutral-500 hover:text-neutral-700 focus-visible:text-neutral-700`,
    $variant === 'tertiary' &&
      tw`px-4 py-2 rounded-lg text-neutral-700 stroke-current hover:bg-neutral-50 focus-visible:bg-neutral-50`,
  ],
)
export const StyledHiddenLabel = tw.span`sr-only`
