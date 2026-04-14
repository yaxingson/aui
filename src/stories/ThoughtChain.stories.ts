import type { Meta, StoryObj } from '@storybook/web-components-vite'

interface ThoughtChainProps {}

const meta = {
  title: 'Components/ThoughtChain',
  tags: ['autodocs'],

} satisfies Meta<ThoughtChainProps>;

export default meta

type Story = StoryObj<ThoughtChainProps>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}
