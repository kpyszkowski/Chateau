import type { Meta, StoryObj } from '@storybook/react'

import Message from './Message'

const meta: Meta<typeof Message> = {
  component: Message,
  args: {
    timeStamp: '10:33 pm, 11 June 2023',
  },
}

export default meta
type Story = StoryObj<typeof Message>

export const BySender: Story = {
  args: {
    children: 'Sample message by sender here',
    variant: 'sender',
  },
}

export const FromRecipient: Story = {
  args: {
    children: 'Sample message from recipient here',
    variant: 'recipient',
  },
}
