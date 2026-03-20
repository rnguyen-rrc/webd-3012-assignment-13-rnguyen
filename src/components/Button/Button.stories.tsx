import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    label: 'Click Me',
    backgroundColor: '#007bff',
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    backgroundColor: '#007bff',
    disabled: true,
  },
}