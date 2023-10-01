import { INavLinks } from '../navBar/helper';
import { useLocation } from 'react-router-dom';
import { LinksWrapper, StyledIconWrapper, StyledLink } from './styled';

export interface LocationType {
  pathname: string;
}
interface NavLinkProps {
  link: INavLinks;
}

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const location: LocationType = useLocation();
  return (
    <div>
      {link.divider}
      <LinksWrapper active={location.pathname === link.to ? 'true' : ''}>
        <StyledIconWrapper active={location.pathname === link.to ? 'true' : ''}>
          {link.icon}
        </StyledIconWrapper>
        <StyledLink to={link.to} active={location.pathname === link.to ? 'true' : ''}>
          {link.name}
        </StyledLink>
      </LinksWrapper>
    </div>
  );
};

export default NavLink;
