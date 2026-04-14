import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { fn } from 'storybook/test'
import type { WelcomeProps } from './Welcome'
import { Welcome } from './Welcome'

const meta = {
  title: 'Components/Welcome',
  tags: ['autodocs'],
  render: () => Welcome(),
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<WelcomeProps>;

export default meta

type Story = StoryObj<WelcomeProps>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}

