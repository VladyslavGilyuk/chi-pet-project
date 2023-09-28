import { colors } from '../theme';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.whiteBackground};;
  }
`;
const Container = styled.div`
  display: flex;
`;

const NavBarWrapper = styled.div``;

const ContentWrapper = styled.div`
  width: 100%;
  margin: 30px;
`;

export { Container, NavBarWrapper, ContentWrapper, GlobalStyle };
