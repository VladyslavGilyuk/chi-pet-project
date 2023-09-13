import React from 'react';
import { StyledWrapper, HeadingText, Text } from './styled';

interface HeadingProps {
  heading: string;
  description?: string; //change to ? optional
}

const Heading: React.FC<HeadingProps> = ({ heading, description }) => {
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
