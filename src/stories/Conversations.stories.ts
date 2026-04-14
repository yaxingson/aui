import type { Meta, StoryObj } from '@storybook/web-components-vite'

interface ConversationsProps {}

const meta = {
  title: 'Components/Conversations',
  tags: ['autodocs'],

} satisfies Meta<ConversationsProps>;

export default meta

type Story = StoryObj<ConversationsProps>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}
