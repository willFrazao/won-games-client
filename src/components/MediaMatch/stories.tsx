import { Meta, StoryObj } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta<typeof MediaMatch>

export const Desktop: StoryObj<typeof MediaMatch> = {
  render: () => <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
}

export const Mobile: StoryObj<typeof MediaMatch> = {
  render: () => <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
