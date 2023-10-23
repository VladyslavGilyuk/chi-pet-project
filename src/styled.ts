import { createGlobalStyle } from 'styled-components';
import { createTheme } from '@mui/material/styles';
import { colors, fonts } from './theme';
const theme = createTheme({
  typography: {
    fontFamily: 'Mulish, sans-serif',
    body1: {
      fontWeight: fonts.weight.medium,
      fontSize: fonts.size.medium,
      lineHeight: '20px',
    },
    h5: {
      fontWeight: fonts.weight.large,
      fontSize: fonts.size.large,
      lineHeight: 'normal',
    },
  },
});

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');
  * {
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px ${colors.grayExtraLight} inset;
    -webkit-text-fill-color: ${colors.grayDark};
  }}
  & .MuiDivider-root {
    height: 83% !important;
  }
  & .MuiPickersLayout-contentWrapper {
    height: 280px;
  }
  & .MuiMultiSectionDigitalClock-root {
    height: 280px;
  }
  & .MuiDialogActions-root {
    padding: 0;
    height: 45px;
  }
  body {
    font-family: 'Mulish', sans-serif;
    box-sizing: 'border-box';
    margin: 0;
    padding: 0;
    background-color: ${colors.whiteBackground};
}
`;

export { theme, GlobalStyles };
