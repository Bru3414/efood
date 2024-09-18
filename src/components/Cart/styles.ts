import styled from "styled-components";
import { cores } from "../../styles";
import lixeira from '../../Assets/Images/lixeira.png'

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 40px;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.white};
  padding: 8px;
  color: ${cores.pink};
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
    border-radius: 50%;
    border: 1px solid ${cores.pink};
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  span {
    font-size: 14;
    line-height: 22px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Amount = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.white};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Campo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.white};
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    outline: none;
    border: none;
    font-size: 14px;
    font-weight: bold;
    padding: 8px;
    color: ${cores.black};
    background-color: ${cores.white};
  }

  small {
    margin-top: 4px;
    background-color: ${cores.white};
    color: red;
    border-radius: 8px;
    text-align: center;
  }
`

export const CepNumDiv = styled.div`
  display: flex;
  column-gap: 34px;
`

export const NumCvvDiv = styled.div`
  display: flex;
  column-gap: 30px;

  :nth-child(1) {
    width: 70%;

    input {
      width: 100%;
    }
  }
  :nth-child(2) {
    width: 30%;

    input {
      width: 100%;
    }
  }
`

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 24px;
`

export const Titulo = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.white};
  margin-bottom: 16px;
`

export const TextoConfirmacaoPedido = styled.p`
  font-size: 14;
  line-height: 22px;
  color: ${cores.white};
  margin-bottom: 24px;
`

export const NenhumProduto = styled.p`
  font-size: 16px;
  width: 100%;
  color: ${cores.white};
  font-weight: bold;
  margin-bottom: 24px;
`
