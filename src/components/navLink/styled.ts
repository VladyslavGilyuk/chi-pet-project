import { NavLink } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import { colors, fonts } from '../../theme';

const LinksWrapper = styled(Box)<{ active?: string }>`
  display: flex;
  align-items: center;
  padding-left: 32px;
  background-color: ${(props) =>
    props.active ? 'rgba(169, 169, 169, 0.08)' : colors.grayBackground};
`;
const StyledLink = styled(NavLink)<{ active?: string }>`
  padding: 18px 25px;
  color: ${(props) => (props.active ? colors.primaryLightBlue : colors.graySideBar)};
  font-size: 16px;
  font-style: normal;
  font-weight: ${fonts.weight.small};
  line-height: normal;
  letter-spacing: ${fonts.spacing.small};
  text-decoration: none;
`;

const StyledIconWrapper = styled(Box)<{ active?: string }>`
  svg path {
    fill: ${(props) => (props.active ? colors.primaryLightBlue : colors.graySideBar)};
  }
`;

export { StyledIconWrapper, LinksWrapper, StyledLink };
