import type { Meta, StoryObj } from '@storybook/react'

import Checkbox from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: {
    children: 'Checkbox content here',
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Secondary: Story = {
  args: {
    defaultChecked: false,
  },
}
