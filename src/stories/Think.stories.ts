import type { Meta, StoryObj } from '@storybook/web-components-vite'

interface ThinkProps {}

const meta = {
  title: 'Components/Think',
  tags: ['autodocs'],

} satisfies Meta<ThinkProps>;

export default meta

type Story = StoryObj<ThinkProps>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}
