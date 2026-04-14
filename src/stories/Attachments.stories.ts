import type { Meta, StoryObj } from '@storybook/web-components-vite'

interface AttachmentsProps {}

const meta = {
  title: 'Components/Attachments',
  tags: ['autodocs'],

} satisfies Meta<AttachmentsProps>;

export default meta

type Story = StoryObj<AttachmentsProps>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}
