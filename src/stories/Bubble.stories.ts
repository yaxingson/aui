import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { fn } from 'storybook/test'
import type { BubbleProps } from './Bubble'
import { Bubble } from './Bubble'

const meta = {
  title: 'Components/Bubble',
  tags: ['autodocs'],
  render: () => Bubble(),
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<BubbleProps>;

export default meta

type Story = StoryObj<BubbleProps>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}
