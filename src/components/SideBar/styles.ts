import styled from "styled-components"
import { cores } from "../../styles"

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  background-color: rgba(0, 0, 0, 0.7);
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBarContainer = styled.div`
  background-color: ${cores.pink};
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;
  z-index: 1;
  overflow-y: auto;
  padding-bottom: 16px;

  @media (max-width: 640px) {
    max-width: 100%;
    width: 100%;
  }
`
