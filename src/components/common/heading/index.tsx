import React from 'react';
import { Card, CardContent } from '@mui/material';
import { HeadingText, Text } from './styled';

interface HeadingProps {
  heading: string;
  description?: string; //change to ? optional
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
