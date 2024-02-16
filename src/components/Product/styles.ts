import styled from "styled-components";
import { cores } from "../../styles";

export const CardProduct = styled.div`
  padding: 8px;
  background-color: ${cores.pink};
  color: ${cores.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;

  img {
    display: block;
    width: 100%;
    height: 170px;
    object-fit: cover;
  }

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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel{
    display: flex;
  }

  .overlay {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  max-width: 960px;
  z-index: 1;
  padding: 32px;
  background-color: ${cores.pink};
  color: #fff;
  border-radius: 8px;

  .close {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  .foto {
    width: 280px;
    height: 280px;
    margin-right: 24px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid ${cores.white};
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p,
  span,
  button {
    font-size: 14px;
  }

  p {
    margin-bottom: 26px;
  }
`
