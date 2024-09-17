import ButtonContainer from "./styles"

export type Props = {
  fullWidth?: boolean
  children: string
  onClick?: () => void
  tipo?: 'button' | 'submit'
}

const Button = ({ children, fullWidth = false, onClick, tipo = 'button' }: Props) => (
  <ButtonContainer fullWidth={fullWidth} type={tipo} onClick={onClick}>{children}</ButtonContainer>
)

export default Button
