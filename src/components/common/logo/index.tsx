import React from 'react';
import { Card, CardActionArea, CardContent } from '@mui/material';
import { StyledCardMedia, Text } from './styled';

const Logo: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <Card style={{ width: '100%', maxWidth: 316, wordWrap: 'break-word' }}>
        <CardActionArea>
          <StyledCardMedia as='img' src={process.env.PUBLIC_URL + '/assets/logo.svg'} />
          {/*?alt='logo'*/}
          <CardContent>
            <Text variant='h3'> Dashboard Kit </Text>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Logo;
