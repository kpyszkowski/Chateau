import Link from 'next/link'
import { HiSparkles } from 'react-icons/hi2'
import tw, { styled, css } from 'twin.macro'

const boldFont = css`
  -webkit-text-stroke: 1px currentColor;
  paint-order: stroke fill;
`

export const StyledContainer = tw(Link)`
flex justify-between items-center px-5 py-2 rounded-xl bg-neutral-50 gap-3 outline-none hover:bg-neutral-100 focus-visible:(bg-neutral-100 ring-2 ring-offset-2)
`
export const StyledWrapper = tw.div`
flex flex-col gap-1 flex-1 whitespace-nowrap min-w-0 text-base 
`
export const StyledHeading = tw.span`
flex gap-5 items-baseline text-black text-lg
`
export const StyledName = styled.span(({ $isBold }: { $isBold: boolean }) => [
  tw`text-ellipsis overflow-hidden`,
  $isBold && boldFont,
])
export const StyledMessageWrapper = tw.div`
inline-flex w-full text-neutral-400
`
export const StyledAvatarsWrapper = tw.div`
inline-flex ml-3 all-child:-ml-3
`
export const StyledMessage = styled.span(
  ({ $isBold }: { $isBold: boolean }) => [
    tw`text-ellipsis overflow-hidden`,
    $isBold && [boldFont, tw`text-black`],
  ],
)
export const StyledTimestamp = tw.span`
inline-flex items-baseline before:(inline-block self-center w-1.5 h-1.5 rounded-full bg-current mx-3)
`
export const StyledNewMessageIndicator = tw(HiSparkles)`
fill-blue-500 mx-2 w-6 h-6
`
