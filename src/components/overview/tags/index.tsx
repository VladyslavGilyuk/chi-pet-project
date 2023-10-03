import { StyledTag } from './styled';
import { colors } from '../../../theme';

interface TagProps {
  text: string;
}

const tagColorMap: Record<string, { color: string; backgroundColor: string }> = {
  Urgent: {
    color: colors.primaryWhite,
    backgroundColor: colors.primaryYellow,
  },
  New: {
    color: colors.primaryWhite,
    backgroundColor: colors.primaryGreen,
  },
  Default: {
    color: colors.primaryGray,
    backgroundColor: colors.grayLightest,
  },
};

const Tag: React.FC<TagProps> = ({ text }) => {
  const { color, backgroundColor } = tagColorMap[text] || tagColorMap.Default;

  return (
    <StyledTag color={color} backgroundColor={backgroundColor}>
      {text}
    </StyledTag>
  );
};

export default Tag;
