import React from 'react'
import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: React.ReactNode // Alterado de JSX.Element para React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void // Corrigido
}

const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {icon}
    {children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
