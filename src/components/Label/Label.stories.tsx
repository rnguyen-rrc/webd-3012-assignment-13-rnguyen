import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Text displayed inside the label',
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
      description: 'Font size (e.g. 1rem, 14px)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state of the label',
    },
    htmlFor: {
      control: 'text',
      description: 'Associates label with input element',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Default Label',
    color: '#000000',
    fontSize: '1rem',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Label',
    color: '#ffffff',
    fontSize: '1rem',
    disabled: true,
  },
};