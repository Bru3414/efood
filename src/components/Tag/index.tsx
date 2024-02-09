import * as S from "./styles"

type Props = {
  type: 'link' | 'info'
  to?: string
  onClick?: () => void
  children: string
}

const Tag = ({ children, type, to, onClick }: Props) => {
  if (type === "info") {
    return (
      <S.TagInfo onClick={onClick}>{children}</S.TagInfo>
    )
  }

  return (
    <S.TagLink to={to as string}>{children}</S.TagLink>
  )
}

export default Tag
