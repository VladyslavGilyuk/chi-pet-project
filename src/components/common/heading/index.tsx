import { HeadingText, StyledWrapper, Text } from './styled';

interface IProps {
  heading: string;
  description?: string;
}

const Heading: React.FC<IProps> = ({ heading, description }) => {
  return (
    <StyledWrapper>
      <HeadingText gutterBottom variant='h2'>
        {heading}
      </HeadingText>
      <Text gutterBottom variant='h5'>
        {description}
      </Text>
    </StyledWrapper>
  );
};

export default Heading;
