import type { Meta, StoryObj } from '@storybook/web-components-vite'

interface SuggestionProps {}

const meta = {
  title: 'Components/Suggestion',
  tags: ['autodocs'],

} satisfies Meta<SuggestionProps>;

export default meta

type Story = StoryObj<SuggestionProps>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}
