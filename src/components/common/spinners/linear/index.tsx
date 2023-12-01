import { LinearProgress } from '@mui/material';
import { StyledSpinnerBox } from './styled';

const Spinner = () => {
  return (
    <StyledSpinnerBox>
      <LinearProgress />
    </StyledSpinnerBox>
  );
};

export default Spinner;
