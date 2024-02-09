import styled from "styled-components";
import { cores } from "../../styles";

const CardProduct = styled.div`
  padding: 8px;
  background-color: ${cores.pink};
  color: ${cores.white};

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    margin-bottom: 8px;
  }

  button {
    background-color: ${cores.white};
    color: ${cores.pink};
    width: 100%;
    border: none;
    padding: 4px;
    cursor: pointer;
  }
`

export default CardProduct
