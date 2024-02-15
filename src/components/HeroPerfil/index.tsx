import * as S from './styled'

type Props = {
  capa: string
  tipo: string
  name: string
}

const HeroPerfil = ({ capa, tipo, name }: Props) => (
  <S.Container style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <S.Title1>{tipo[0].toUpperCase() + tipo.substring(1)}</S.Title1>
      <S.Title2>{name}</S.Title2>
    </div>
  </S.Container>
)

export default HeroPerfil
