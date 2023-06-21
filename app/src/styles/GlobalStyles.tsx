import { createGlobalStyle } from 'styled-components'
import type { CSSObject } from 'styled-components'
import { globalStyles } from 'twin.macro'
import { Inter } from 'next/font/google'

const font = Inter({ subsets: ['latin'] })

const GlobalStyles = createGlobalStyle`
  body {
    ${font.style}
  }

  ${globalStyles as CSSObject}
`

export default GlobalStyles
