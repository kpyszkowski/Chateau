import tw from 'twin.macro'
import TextField from '../../atoms/TextField/TextField'

export const StyledContainer = tw.div`px-6`
export const StyledHeadingWrapper = tw.div`flex justify-between items-center py-8`
export const StyledHeadingPrimary = tw.h1`flex items-center gap-3 text-2xl select-none`
export const StyledWrapper = tw.div`flex flex-col gap-4`
export const StyledSearchbarWrapper = tw.form`py-4`
export const StyledSearchbarTextField = tw(
  TextField,
)`bg-neutral-50 rounded-xl border-0 hover:bg-neutral-100 focus-within:bg-neutral-100`
export const StyledHeadingSecondary = tw.h2`text-lg`
export const StyledConversationsList = tw.ul`flex flex-col gap-3`
