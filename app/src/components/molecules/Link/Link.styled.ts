import Link from 'next/link'
import tw from 'twin.macro'

export const StyledLink = tw(
  Link,
)`underline  outline-0 hover:(text-neutral-700) focus-visible:(ring-2 ring-offset-2 rounded-sm)`
