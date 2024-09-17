import styled from "styled-components";
import fundo from '../../Assets/Images/fundo.png'
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const Fundo = styled.div`
  background-image: url(${fundo});
  width: 100%;
`

export const Title = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: ${cores.pink};
`

export const Carrinho = styled.p`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  justify-content: flex-end;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  padding: 40px 170px 64px;
  color: ${cores.pink};
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
    padding: 16px 50px;

    img {
      margin: 20px 0;
    }
  }
`

export const DivCarrinho = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  @media (max-width: 640px) {
    justify-content: center;
  }
`
export const DivTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;

  @media (max-width: 640px) {
    justify-content: center;
  }
`

