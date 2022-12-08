import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --gray-600: #313131;
    --gray-500: #3E4144;
    --gray-400: #46484C;
    --gray-300: #545454;
    --gray-200: #BBBBBB;
    --gray-100: #CDCDCD;
    --white: #EEEEF0;
  }

  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`