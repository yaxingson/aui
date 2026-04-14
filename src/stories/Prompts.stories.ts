import type { Meta, StoryObj } from '@storybook/web-components-vite'

interface PromptsProps {}

const meta = {
  title: 'Components/Prompts',
  tags: ['autodocs'],

} satisfies Meta<PromptsProps>;

export default meta

type Story = StoryObj<PromptsProps>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}
