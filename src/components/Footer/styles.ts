import styled from "styled-components";
import { cores } from "../../styles";

export const FooterContainer = styled.div`
  background-color: ${cores.white};
  width: 100%;
  text-align: center;
  padding: 40px 0;
`
export const Logo = styled.img`
  margin-bottom: 32px;
`
export const Lista = styled.ul`
  justify-content: center;
  display: flex;
`
export const Item = styled.li`
  margin: 0 4px;
`
export const Text = styled.p`
  margin-top: 80px;
  font-size: 10px;
  color: ${cores.pink};
`
