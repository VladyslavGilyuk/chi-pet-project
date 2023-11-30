import { fonts } from '../../../theme';
import { styled } from '@mui/material';
interface StyledTagProps {
  color: string;
  backgroundColor: string;
}

export const StyledTag = styled('div')<StyledTagProps>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  text-align: center;
  font-size: 11px;
  font-style: normal;
  font-weight: ${fonts.weight.large};
  line-height: normal;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 100px;
`;
