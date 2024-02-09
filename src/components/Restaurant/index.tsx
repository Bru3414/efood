import * as S from './styles'
import star from '../../Assets/Images/star.png'
import Tag from '../Tag'

type Props = {
  title: string
  image: string
  nota: number
  description: string
  infos: string[]
}

const Restaurant = ({ title, image, nota, description, infos }: Props) => (
  <S.Card>
    <img src={image} />
    <S.Infos>
      {infos.map(infos => <Tag type='info' key={infos}>{infos}</Tag>)}
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
      <Tag type='link' to='/perfil'>Saiba mais</Tag>
    </S.CardBody>
  </S.Card>
)

export default Restaurant
