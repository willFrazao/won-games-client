import { Meta, StoryObj } from '@storybook/react'
import Ribbon from '.'

const meta: Meta<typeof Ribbon> = {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
}

export default meta

export const Default: StoryObj<typeof Ribbon> = {
  render: (args) => (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        backgroundColor: '#888'
      }}
    >
      <Ribbon {...args} />
    </div>
  )
}
