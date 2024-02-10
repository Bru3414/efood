import styled from "styled-components";
import fundoPerfil from '../../Assets/Images/fundo_perfil.png'

export const Container = styled.div`
  position: relative;
  background-image: url(${fundoPerfil});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 24px;
  padding-bottom: 32px;
  width: 100%;
  height: 280px;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
  }
`
export const Title1 = styled.h2`
  color: #fff;
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 156px;
`
export const Title2 = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
`
