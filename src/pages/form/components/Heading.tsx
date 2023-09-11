import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import styled from 'styled-components';

const HeadingText = styled(Typography)`
  && {
    font-size: 24px;
    font-weight: bold;
    color: #252733;
    text-align: center;
    vertical-align: top;
  }
`;

const Text = styled(Typography)`
  && {
    font-size: 14px;
    font-weight: bold;
    color: #9fa2b4;
    text-align: center;
    vertical-align: top;
  }
`;

interface HeadingProps {
  heading: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ heading, description }) => {
  return (
    <div style={{ width: '100%' }}>
      <Card>
        <CardContent>
          <HeadingText gutterBottom variant='h2'>
            {heading}
          </HeadingText>
          <Text gutterBottom variant='h5'>
            {description}
          </Text>
        </CardContent>
      </Card>
    </div>
  );
};

export default Heading;
