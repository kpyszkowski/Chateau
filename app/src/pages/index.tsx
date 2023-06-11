import React from 'react'
import tw from 'twin.macro'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-blue-300 to-blue-400`,
  ],
}

const IndexPage = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <h1 tw="text-3xl text-white font-light">Chateau</h1>
    </div>
  </div>
)

export default IndexPage
