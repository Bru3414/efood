import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
`

export const List = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

    @media (max-width: 640px) {
      display: block;
      width: 100%;
    }
`
