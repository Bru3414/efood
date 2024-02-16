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
