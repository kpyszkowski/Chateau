import type { Meta, StoryObj } from '@storybook/react'

import ConversationThumbnail from './ConversationThumbnail'

const meta: Meta<typeof ConversationThumbnail> = {
  component: ConversationThumbnail,
  args: {
    userId: '1',
    latestMessageDate: Date.now.toString(),
  },
  argTypes: {
    latestMessageDate: {
      control: 'date',
    },
  },
}

export default meta
type Story = StoryObj<typeof ConversationThumbnail>

export const PrivateDefault: Story = {
  args: {
    name: 'Paul Smith',
    participants: [
      { id: '1', name: 'John Doe', isAvailable: true },
      { id: '2', name: 'Paul Smith', isAvailable: false },
    ],
    latestMessage: 'Hi John, how was your day?',
    isUnread: false,
  },
}
export const PrivateUnread: Story = {
  args: {
    name: 'Paul Smith',
    participants: [
      { id: '1', name: 'John Doe', isAvailable: true },
      { id: '2', name: 'Paul Smith', isAvailable: false },
    ],
    latestMessage: 'Hi John, how was your day?',
    isUnread: true,
  },
}

export const GroupDefault: Story = {
  args: {
    name: 'Paul, William, Jane',
    participants: [
      { id: '1', name: 'John Doe', isAvailable: true },
      { id: '2', name: 'Paul Smith', isAvailable: false },
      { id: '3', name: 'William Ryans', isAvailable: false },
      { id: '4', name: 'Jane Bone', isAvailable: false },
    ],
    latestMessage: 'Hi John, how was your day?',
    isUnread: true,
  },
}

export const GroupUnread: Story = {
  args: {
    participants: [
      { id: '1', name: 'John Doe', isAvailable: true },
      { id: '2', name: 'Paul Smith', isAvailable: false },
      { id: '3', name: 'William Ryans', isAvailable: false },
      { id: '4', name: 'Jane Bone', isAvailable: false },
    ],
    latestMessage: 'Hi John, how was your day?',
    isUnread: true,
  },
}

export const GroupWithName: Story = {
  args: {
    name: 'Running buddies 🏃🏻',
    participants: [
      { id: '1', name: 'John Doe', isAvailable: true },
      { id: '2', name: 'Paul Smith', isAvailable: false },
      { id: '3', name: 'William Ryans', isAvailable: false },
      { id: '4', name: 'Jane Bone', isAvailable: false },
    ],
    latestMessage: "It's time for training! Who is ready to get sweaty? 😅",
    isUnread: false,
  },
}
