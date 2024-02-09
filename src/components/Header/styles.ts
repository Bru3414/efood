import styled from "styled-components";

import fundo from '../../Assets/Images/fundo.png'
import { cores } from "../../styles";

export const HeaderContainer = styled.div`
  background-image: url(${fundo});
  width: 100%;
  height: 360px;
`
export const Content = styled.div`
  width: 100%;
  text-align: center;
  color: ${cores.pink};

  img {
    margin-top: 32px;
  }

  h2 {
    font-size: 36px;
    margin-top: 140px;
    font-weight: bold;
  }
`
