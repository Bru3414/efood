import styled from "styled-components";
import { cores } from "../../styles";
import { TagInfo, TagLink } from "../Tag/styles";

export const Card = styled.div`
  position: relative;

  > img {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  @media (max-width: 640px) {
    margin-bottom: 24px;
  }
`

export const Infos = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;

  ${TagInfo} {
    margin-left: 8px;
  }

  ${TagLink} {
    margin-left: 8px;
  }
`

export const CardBody = styled.div`
  color: ${cores.pink};
  padding: 8px;
  border-bottom: 2px solid ${cores.pink};
  border-left: 2px solid ${cores.pink};
  border-right: 2px solid ${cores.pink};
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;

  span {
    display: flex;

    p {
      margin-right: 8px;
    }
  }
`

export const CardDescription = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`
