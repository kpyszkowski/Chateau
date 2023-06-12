import tw, { styled } from 'twin.macro'
import type {
  MessageItemsAlignmentType,
  MessageVariantType,
} from './Message.types'

export const StyledContainer = styled.div(
  ({ $itemsAlignment }: { $itemsAlignment: MessageItemsAlignmentType }) => [
    tw`flex flex-col gap-1.5`,
    $itemsAlignment === 'left' && tw`items-start`,
    $itemsAlignment === 'right' && tw`items-end`,
  ],
)

export const StyledMessage = styled.p(
  ({ $variant }: { $variant: MessageVariantType }) => [
    tw`px-5 py-2 rounded-2xl`,
    $variant === 'sender' && tw`bg-blue-500 text-white rounded-br-none`,
    $variant === 'recipient' && tw`bg-neutral-200 text-black rounded-bl-none`,
  ],
)

export const StyledTimeStamp = tw.span`text-xs text-neutral-400`
