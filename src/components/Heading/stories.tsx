import { Meta, StoryObj } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading
} as Meta

export const Default: StoryObj<HeadingProps> = {}

Default.args = {
  children: 'Most Populars',
  color: 'black'
}
