import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { within, userEvent, expect } from '@storybook/test'
import type { AttachmentsProps } from './Attachments'
import { Attachments } from './Attachments'

const meta = {
  title: 'Components/Attachments',
  tags: ['autodocs'],
  component:'Attachments',
  render: () => Attachments(),
  argTypes:{
    overflow:{
      control:'select',
      options:['scrollX', 'scrollY', 'wrap'],
      description:''
    }
  },
  args:{
    items:[],
    overflow:'wrap',
    limit: 8,
    drag: true,

  },
  
} satisfies Meta<AttachmentsProps>;

export default meta

type Story = StoryObj<AttachmentsProps>

export const BasicUsage: Story = {}
export const ScrollMode: Story = {}
export const DragUpload: Story = {}
export const Placeholder: Story = {}
export const CustomStyle: Story = {}

export const ClickTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /click me/i });
    await userEvent.click(button)
    expect(button).toBeEnabled()
  }
}

