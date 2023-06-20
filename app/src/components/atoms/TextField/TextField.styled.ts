import tw, { styled } from 'twin.macro'

export const StyledContainer = tw.label`flex flex-col gap-1.5`
export const StyledInput = styled.input(
  ({
    $hasError,
    $hasSibling,
  }: {
    $hasError: boolean
    $hasSibling: boolean
  }) => [
    tw`w-full p-3 rounded-xl border-2 bg-transparent text-neutral-700 border-neutral-500 outline-0 hover:border-neutral-500 placeholder:text-neutral-400 placeholder-shown:border-neutral-400`,
    $hasError && tw`border-red-800 focus-visible:border-red-800`,
    $hasSibling
      ? tw`border-0`
      : tw`focus-visible:(ring-2 ring-offset-2 border-neutral-500)`,
  ],
)
export const StyledLabel = styled.span(
  ({ $isHidden }: { $isHidden: boolean }) => [$isHidden && tw`sr-only`],
)
export const StyledErrorMessageWrapper = tw.p`inline-flex items-center gap-1 text-red-800 mt-0.5`
export const StyledErrorMessage = tw.span`text-sm`
export const StyledInputWrapper = styled.div(
  ({ $hasBorder }: { $hasBorder: boolean }) => [
    tw`flex rounded-xl focus-within:(ring-2 ring-offset-2)`,
    $hasBorder && tw`border-2`,
  ],
)
export const StyledButton = tw.button`px-3 outline-0 rounded-xl focus-visible:(ring-2 ring-inset) [svg]:stroke-neutral-500`
