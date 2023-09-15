import { createGlobalStyle } from 'styled-components';
import { createTheme } from '@mui/material/styles';
import { grayBackground } from './theme';

const theme = createTheme({
  typography: {
    fontFamily: 'Mulish, sans-serif',
  },
});

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');
  body {
    font-family: 'Mulish', sans-serif;
    box-sizing: 'border-box';
    margin: 0;
    padding: 0;
    background-color: ${grayBackground};
}
`;

export { theme, GlobalStyles };