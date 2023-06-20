import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  args: {
    name: 'John Doe',
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    showStatus: false,
  },
}
export const Large: Story = {
  args: {
    isLarge: true,
  },
}

export const WithStatus: Story = {
  args: {
    showStatus: true,
    isAvaliable: true,
  },
}

export const WithStatusLarge: Story = {
  args: {
    showStatus: true,
    isAvaliable: true,
    isLarge: true,
  },
}
