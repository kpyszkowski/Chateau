import tw, { styled } from 'twin.macro'

export const StyledContainer = tw.label`flex flex-col gap-1.5`
export const StyledInput = styled.input(
  ({ $hasError }: { $hasError: boolean }) => [
    tw`w-full p-3 rounded-xl border-2 text-neutral-700 border-neutral-500 outline-0 focus-visible:(ring-2 ring-offset-2 border-neutral-500) hover:border-neutral-500 placeholder:text-neutral-400 placeholder-shown:border-neutral-400`,
    $hasError && tw`border-red-800 focus-visible:border-red-800`,
  ],
)
export const StyledLabel = tw.span``
export const StyledErrorMessageWrapper = tw.p`inline-flex items-center gap-1 text-red-800 mt-0.5`
export const StyledErrorMessage = tw.span`text-sm`
