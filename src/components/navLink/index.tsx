import { INavLinks } from '../navBar/helper';
import { useLocation } from 'react-router-dom';
import { LinksWrapper, StyledIconWrapper, StyledLink } from './styled';

export interface LocationType {
  pathname: string;
}
interface IProps {
  link: INavLinks;
}

const NavLink: React.FC<IProps> = ({ link }) => {
  const location: LocationType = useLocation();
  return (
    <>
      {link.divider}
      <LinksWrapper active={location.pathname === link.to ? 'true' : ''}>
        <StyledIconWrapper active={location.pathname === link.to ? 'true' : ''}>
          {link.icon}
        </StyledIconWrapper>
        <StyledLink to={link.to} active={location.pathname === link.to ? 'true' : ''}>
          {link.name}
        </StyledLink>
      </LinksWrapper>
    </>
  );
};

export default NavLink;
