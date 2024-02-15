import * as S from './styles'
import star from '../../Assets/Images/star.png'
import Tag from '../Tag'

type Props = {
  id: number
  title: string
  image: string
  nota: number
  description: string
  info: string
  destacado: boolean
}

const Restaurant = ({ id, title, image, nota, description, info, destacado }: Props) => (
  <S.Card>
    <img src={image} />
    <S.Infos>
      {destacado && (
        <Tag type='info'>Destaque da semana</Tag>
      )}
      <Tag type='info'>{info[0].toUpperCase() + info.substring(1)}</Tag>
    </S.Infos>
    <S.CardBody>
      <S.CardHeader>
        <h3>{title}</h3>
        <span>
          <p>
            {nota}
          </p>
          <img src={star} alt="estrela" />
        </span>
      </S.CardHeader>
      <S.CardDescription>{description}</S.CardDescription>
      <Tag type='link' to={`/perfil/${id}`}>Saiba mais</Tag>
    </S.CardBody>
  </S.Card>
)

export default Restaurant
