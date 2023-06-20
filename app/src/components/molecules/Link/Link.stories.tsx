import type { Meta, StoryObj } from '@storybook/react'

import Link from './Link'

const meta: Meta<typeof Link> = {
  component: Link,
  args: {
    children: 'Link',
    href: '#',
  },
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {}
