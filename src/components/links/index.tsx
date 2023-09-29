import { INavLinks } from '../navBar/helper';
import { LinksWrapper, StyledIconWrapper, StyledLink } from './styled';

export interface LocationType {
  pathname: string;
}
const Links: React.FC<{ links: Array<INavLinks>; location: LocationType }> = ({
  links,
  location,
}) => {
  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
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
      ))}
    </>
  );
};

export default Links;
