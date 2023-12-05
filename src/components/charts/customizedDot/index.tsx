import { FunctionComponent } from 'react';
import { colors } from '../../../theme';

interface IProps {
  cx?: number;
  cy?: number;
  gray?: boolean;
}

const CustomizedDot: FunctionComponent<IProps> = ({ cx, cy, gray }) => {
  if (cx === undefined || cy === undefined) {
    return null;
  }
  return (
    <svg x={cx - 13} y={cy - 13} height='100' width='100'>
      <circle
        cx='13'
        cy='13'
        r='5'
        stroke={gray ? `${colors.grayDark}` : `${colors.primaryBlue}`}
        strokeWidth='4'
        fill='white'
      />
      <circle
        cx='13'
        cy='13'
        r='12'
        stroke={gray ? `${colors.grayDark}` : `${colors.primaryBlue}`}
        opacity='0.16'
        strokeWidth='2'
        fill='transparent'
      />
    </svg>
  );
};

export default CustomizedDot;
