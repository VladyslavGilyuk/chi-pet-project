import React from 'react';
import { Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import styled from 'styled-components';

const StyledCardMedia = styled(CardMedia)`
  display: block;
  width: 48px;
  height: 48px;
  margin: 0 auto;
`;
const Text = styled(Typography)`
  && {
    font-size: 19px;
    font-weight: bold;
    color: #a4a6b3;
    text-align: center;
    vertical-align: top; //??
  }
`;
const Logo: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <Card style={{ width: '100%', maxWidth: 316, wordWrap: 'break-word' }}>
        <CardActionArea>
          <StyledCardMedia as='img' src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt='logo' />
          <CardContent>
            <Text variant='h3'> Dashboard Kit </Text>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Logo;
