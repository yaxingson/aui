import type { Meta, StoryObj } from '@storybook/web-components-vite'

interface FileCardProps {}

const meta = {
  title: 'Components/FileCard',
  tags: ['autodocs'],

} satisfies Meta<FileCardProps>;

export default meta

type Story = StoryObj<FileCardProps>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}
