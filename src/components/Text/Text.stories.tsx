import type { Meta, StoryObj } from '@storybook/react'
import Text from './Text'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content',
    },
    color: {
      control: 'color',
      description: 'Text color',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color',
    },
    fontSize: {
      control: 'text',
      description: 'Font size (e.g. 16px, 1rem)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
}

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    text: 'This is default text',
    color: '#000000',
    fontSize: '16px',
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    text: 'This text is disabled',
    disabled: true,
  },
}