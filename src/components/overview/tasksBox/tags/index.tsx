import { StyledTag } from './styled';
import { colors } from '../../../../theme';

interface TagProps {
  text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => {
  let color = colors.primaryGray;
  let backgroundColor = colors.grayLightest;

  if (text === 'Urgent') {
    color = colors.primaryWhite;
    backgroundColor = colors.primaryYellow;
  } else if (text === 'New') {
    color = colors.primaryWhite;
    backgroundColor = colors.primaryGreen;
  } else if (text === 'Default') {
    color = colors.primaryGray;
    backgroundColor = colors.grayLightest;
  }

  return (
    <StyledTag color={color} backgroundColor={backgroundColor}>
      {text}
    </StyledTag>
  );
};

export default Tag;
