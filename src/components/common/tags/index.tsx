import { StyledTag } from './styled';
import { tagColorMap } from './helper';

interface IProps {
  text: string;
}

const Tag: React.FC<IProps> = ({ text }) => {
  const { color, backgroundColor } = tagColorMap[text] || tagColorMap.Default;

  return (
    <StyledTag color={color} backgroundColor={backgroundColor} data-testid='tag'>
      {text}
    </StyledTag>
  );
};

export default Tag;
