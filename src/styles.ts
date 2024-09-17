import { createGlobalStyle } from "styled-components";

export const cores = {
  pink: '#E66767',
  white: '#FFEBD9',
  fundo: '#FFF8F2',
  black: '#4B4B4B'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.fundo};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      width: 80%;
    }

    @media (max-width: 640px) {
      width: 90%;
    }
  }
`
