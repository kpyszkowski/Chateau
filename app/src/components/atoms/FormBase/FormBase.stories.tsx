import type { Meta, StoryObj } from '@storybook/react'

import FormBase from './FormBase'
import TextField from '../TextField/TextField'
import Checkbox from '../Checkbox/Checkbox'
import Button from '../Button/Button'

const meta: Meta<typeof FormBase> = {
  component: FormBase,
}

export default meta
type Story = StoryObj<typeof FormBase>

export const Default: Story = {
  args: {
    heading: 'Form heading',
    description: 'Form description here lorem ipsum',
    children: 'Form fields go here',
  },
}

export const ExampleForm: Story = {
  args: {
    heading: 'Sign in',
    description: 'Good to see you back',
    children: (
      <>
        <TextField
          label="Email"
          placeholder="Your email..."
          type="email"
        />
        <TextField
          label="Password"
          placeholder="Your password..."
          type="password"
        />
        <Checkbox>Remember me</Checkbox>
        <Button>Sign in</Button>
      </>
    ),
  },
}
