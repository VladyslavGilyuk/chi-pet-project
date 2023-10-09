import { StyledTag } from './styled';
import { tagColorMap } from './helper';

interface TagProp {
  text: string;
}

const Tag: React.FC<TagProp> = ({ text }) => {
  const { color, backgroundColor } = tagColorMap[text] || tagColorMap.Default;

  return (
    <StyledTag color={color} backgroundColor={backgroundColor}>
      {text}
    </StyledTag>
  );
};

export default Tag;
