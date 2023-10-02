import { colors } from '../../theme';
import { Box, styled } from '@mui/material';

const Container = styled(Box)`
  display: flex;
  background-color: ${colors.whiteBackground};
`;

const ContentContainer = styled(Box)`
  width: 100%;
  margin: 30px;
`;

export { Container, ContentContainer };
