import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

import backgroundTaks from './assets/images/BackgroundMobile.svg';

export default createGlobalStyle`

  *{
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  };

  html,body, #root {
    min-height: 100%;

  }

  body {
    background: #f6f7f9;
    -webkit-font-smoothing: antialiased !important;

    ${media.lessThan('small')`
      background: url(${backgroundTaks}) no-repeat;
    `}
  }

  body, input, button {
    color: #222;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
