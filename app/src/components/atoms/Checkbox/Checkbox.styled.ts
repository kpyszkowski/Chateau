import tw from 'twin.macro'
import { HiOutlineCheck } from 'react-icons/hi2'

export const StyledContainer = tw.label`flex gap-3 relative focus-within:(ring-2 ring-offset-2 rounded-sm)`

export const StyledInput = tw.input`absolute inset-0 w-full h-full opacity-0 cursor-pointer`

export const StyledIcon = tw(
  HiOutlineCheck,
)`rounded-sm stroke-2 ring-2 ring-neutral-400 ring-inset stroke-transparent w-6 h-6 peer-checked:(bg-blue-400 stroke-white ring-0) peer-hover:ring-neutral-600 peer-hover:peer-checked:bg-blue-500`
