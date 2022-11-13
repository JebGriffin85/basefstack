import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Box sx={{ minWidth: 275, paddingTop: '3em', width: '100vh', display: 'flex' }}>
      <CardContent>
        <Typography variant="body2">
          well meaning and kindly.
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex'}}>
      <CardActions>
        <Button variant="contained" size="small">Learn More</Button>
        <Button variant="contained" size="small">Learn More</Button>
        <Button variant="contained" size="small">Learn More</Button>
        <Button variant="contained" size="small">Learn More</Button>
      </CardActions>
      </Box>
    </Box>
  );
}
