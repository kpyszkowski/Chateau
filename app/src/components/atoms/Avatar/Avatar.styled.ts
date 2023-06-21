import tw, { styled } from 'twin.macro'

export const StyledContainer = styled.div(
  ({ $isLarge }: { $isLarge: boolean }) => [
    tw`flex items-center justify-center rounded-full relative select-none bg-neutral-200 text-neutral-400 font-medium`,
    $isLarge ? tw`w-12 h-12 text-2xl` : tw`w-8 h-8 text-base`,
  ],
)

export const StyledStatusIndicator = styled.span(
  ({ $isGreen }: { $isGreen: boolean }) => [
    tw`rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1/5 h-1/5 ring-2 ring-white`,
    $isGreen ? tw`bg-green-400` : tw`bg-neutral-300`,
  ],
)
