import {createGlobalStyle} from 'styled-components';
import background from '../assets/images/background.svg'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');

  *{
    margin: 0;
    paddin: 0;
    outline: 0;
    box-sizing: boder-box;
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 14px Roboto, sans-serif;
  }

  #root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button{
    cursor:pointer;
  }
`;