import { colors } from '../theme';
import { styled } from '@mui/material';

const Container = styled('main')`
  display: flex;
  background-color: ${colors.whiteBackground};
`;

const ContentWrapper = styled('div')`
  width: 100%;
  margin: 30px;
`;

export { Container, ContentWrapper };
