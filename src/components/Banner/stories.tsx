import { Meta, StoryObj } from '@storybook/react'
import Banner, { BannerProps } from '.'

const meta: Meta<typeof Banner> = {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    ribbon: {
      control: 'text'
    },
    ribbonColor: {
      options: ['primary', 'secondary'],
      control: 'inline-radio'
    },
    ribbonSize: {
      options: ['normal', 'small'],
      control: 'inline-radio'
    }
  }
}

export default meta

export const Default: StoryObj<BannerProps> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  )
}

export const WithRibbon: StoryObj<BannerProps> = {
  args: {
    ribbon: '20% OFF',
    ribbonSize: 'normal',
    ribbonColor: 'primary'
  },
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Banner {...args} />
    </div>
  )
}
