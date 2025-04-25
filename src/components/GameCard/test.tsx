import { fireEvent, screen } from '@testing-library/react'
import theme from '../../styles/theme'
import { renderWithTheme } from '../../utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    // renderizar o GameCard
    renderWithTheme(<GameCard {...props} />)

    // verificar se o title está renderizando
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    // verificar se o developer está renderizando
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    // verificar se o img está renderizando
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    // verificar se o texto para add na wishlist está renderizando
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    // renderiza o componente
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('R$ 235,00')

    // preço não tenha line-through
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })

    // preço tenha o background secundário
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotionalPrice is passed', () => {
    // renderiza o componente (com promotionalPrice) // 200 reais // 15 reais
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)

    // preço tenha line-through (235)
    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    // preço novo promocional nao vai ter o line-through (15 reais)
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled FavoriteIcon when favorite is true', () => {
    // renderiza o componente (com favorite)
    renderWithTheme(<GameCard {...props} favorite />)

    // verificar se o icon está preenchido
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()

    // renderiza o componente (com favorite)
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
