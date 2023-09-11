import React from 'react';
import { Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';

const Login: React.FC = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 316 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            width='48'
            height='48'
            image={process.env.PUBLIC_URL + '/assets/logo.svg'}
            alt='logo'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div' align='center'>
              Dashboard Kit
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Login;
