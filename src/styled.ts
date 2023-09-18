import { colors } from './theme';
import { createGlobalStyle } from 'styled-components';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Mulish, sans-serif',
  },
});

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');
  * {
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px ${colors.grayExtraLight} inset;
    -webkit-text-fill-color: ${colors.grayDark};
  }}
  body {
    font-family: 'Mulish', sans-serif;
    box-sizing: 'border-box';
    margin: 0;
    padding: 0;
    background-color: ${colors.grayBackground};
}
`;

export { theme, GlobalStyles };
