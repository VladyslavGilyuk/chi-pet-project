import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '../../routes';
import { ErrorContainer, StyledButton, StyledTypography } from './styled';

const PageNotFound = () => {
  return (
    <ErrorContainer>
      <StyledTypography variant='h6'>Error 404: Page Not Found</StyledTypography>
      <Link to={ROUTE_PATH.Home}>
        <StyledButton variant='contained'>Back to Overview</StyledButton>
      </Link>
    </ErrorContainer>
  );
};

export default PageNotFound;
