import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Button',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Teritary: Story = {
  args: {
    variant: 'tertiary',
  },
}

export const PrimaryWithHiddenLabel: Story = {
  args: {
    variant: 'primary',
    hiddenLabel: "I'm smiley!",
    children: '🙂',
  },
}
