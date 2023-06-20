import type { Meta, StoryObj } from '@storybook/react'

import TextField from './TextField'
import { HiOutlineFaceSmile } from 'react-icons/hi2'

const meta: Meta<typeof TextField> = {
  component: TextField,
  args: {
    label: 'Label',
    placeholder: 'Placeholder...',
  },
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {}

export const WithValue: Story = {
  args: {
    defaultValue: 'Field value',
  },
}

export const WithErrorMessage: Story = {
  args: {
    defaultValue: 'Invalid field value',
    errorMessage: 'Error message',
  },
}

export const WithButton: Story = {
  args: {
    isLabelHidden: true,
    buttonCallback: () => alert('Whoa, you clicked me!'),
    buttonIcon: HiOutlineFaceSmile,
    buttonLabel: 'Click my smiley face!',
  },
}
