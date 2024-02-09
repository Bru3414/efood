import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const TagInfo = styled.div`
  padding: 4px 6px;
  background-color: ${cores.pink};
  color: ${cores.white};
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
`
export const TagLink = styled(Link)`
  padding: 4px 6px;
  background-color: ${cores.pink};
  color: ${cores.white};
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  text-decoration: none;
`
