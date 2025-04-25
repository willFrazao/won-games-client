import { Meta, StoryObj } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

const meta: Meta<typeof GameCard> = {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  argTypes: {
    onFav: {
      action: 'clicked'
    },
    ribbon: { type: 'string' }
  }
}

export default meta

export const Default: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}

export const WithRibbon: StoryObj<GameCardProps> = {
  args: {
    ribbon: '20% OFF',
    ribbonSize: 'normal',
    ribbonColor: 'primary'
  },
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <GameCard {...args} />
    </div>
  )
}
