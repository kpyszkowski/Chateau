import type { Meta, StoryObj } from '@storybook/react'

import GuestLayout from './GuestLayout'

const meta: Meta<typeof GuestLayout> = {
  component: GuestLayout,
}

export default meta
type Story = StoryObj<typeof GuestLayout>

export const Default: Story = {
  args: {
    children: 'Guest Layout',
  },
}
