import type { Meta, StoryObj } from '@storybook/web-components-vite'

interface SenderProps {}

const meta = {
  title: 'Components/Sender',
  tags: ['autodocs'],

} satisfies Meta<SenderProps>;

export default meta

type Story = StoryObj<SenderProps>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}
