

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import pic from './pic.png'
import './landingPage.css'
import { render } from 'react-dom';

const footers = [
    {
        title: 'About',
        description: ['Developer'],
    },

];

const IMAGES = [pic]

function MainHero() {
    const [loaded, setLoaded] = React.useState(true);
    const [imgsLoaded, setImgsLoaded] = React.useState(false)

    React.useEffect(() => {
      const loadImage = image => {
        return new Promise((resolve, reject) => {
          const loadImg = new Image()
          loadImg.src = image
          // wait 2 seconds to simulate loading time
          loadImg.onload = () =>
              resolve(image.url)

  
          loadImg.onerror = err => reject(err)
        })
      }
  
      Promise.all(IMAGES.map(image => loadImage(image)))
        .then(() => setImgsLoaded(true))
        .catch(err => console.log("Failed to load images", err))
    }, [])
  

    React.useEffect(() => {
        document.body.style.background = 'rgba(239, 239, 239, 0.8)';
  
    })

 


    return (loaded && imgsLoaded &&
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
    

            {/* Hero unit */}
            <Container id='mainHero' disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="black"
                    gutterBottom
                >
                    idkwhat2code.com
                </Typography>
                <Typography variant="h6" align="center" color="gray" component="p">
                    A place to share ideas and build projects
                </Typography>
                <Container maxWidth="100vh" component="main">
                    <Box id='picture'
                  
                        component="img"
                        sx={{
                            height: '100%',
                            width: '100%'

                        }}
                        alt="Red Piano"
                        src={IMAGES[0]}
                    
                    />
                </Container>
            </Container>
            {/* End hero unit */}

            {/* Footer */}
            <Container
                maxWidth="md"
                component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [3, 6],
                }}
            >
                <Grid container spacing={4} justifyContent="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="text.secondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Container>
            {/* End footer */}
        </React.Fragment>
    );
}

export default function LandingPage() {
    return <MainHero />;
}