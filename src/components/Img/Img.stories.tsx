import type { Meta, StoryObj } from '@storybook/react'
import Img from './Img'

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof Img>

export const Default: Story = {
  args: {
    src: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1600x1066/gallery-1506709524-cola-0247.jpg?resize=1800:*',
    alt: 'Placeholder Image',
    width: '150px',
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    src: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1600x1066/gallery-1506709524-cola-0247.jpg?resize=1800:*',
    alt: 'Disabled Image',
    width: '150px',
    disabled: true,
  },
}