import styled from "styled-components";
import fundo from '../../Assets/Images/fundo.png'
import { cores } from "../../styles";

export const Fundo = styled.div`
  background-image: url(${fundo});
  width: 100%;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 40px 170px 64px;
  color: ${cores.pink};
  `

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Carrinho = styled.p`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`

