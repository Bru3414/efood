import ButtonContainer from "./styles"

export type Props = {
  fullWidth?: boolean
  children: string
  onClick?: () => void
}

const Button = ({ children, fullWidth = false, onClick }: Props) => (
  <ButtonContainer fullWidth={fullWidth} type="button" onClick={onClick}>{children}</ButtonContainer>
)

export default Button
