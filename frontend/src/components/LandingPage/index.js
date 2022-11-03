import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import pic from './pic.png'
import './landingPage.css'


const footers = [
    {
        title: 'About',
        description: ['Developer'],
    },

];

const IMAGES = [pic];

function MainHero() {
    const [loaded, setLoaded] = React.useState(true);
    const [imgsLoaded, setImgsLoaded] = React.useState(false)

    React.useEffect(() => {
      const loadImage = image => {
        return new Promise((resolve, reject) => {
          const loadImg = new Image()
          loadImg.src = image
          loadImg.onload = () =>
              resolve(image.url)
          loadImg.onerror = err => reject(err)
        })
      }
  
      //checking to see if all images have been loaded
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
            <Container id='mainHero'  disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography id='title'
                    component="h1"
                    variant="h2"
                    align="center"
                    color="black"
                    gutterBottom
                    fontFamily="monospace"
                    fontSize="3em"
                >
                    idkwhat2code
                </Typography>
                <Typography id='description' variant="h6" align="center" color="gray" component="p" style={{paddingTop: '2em', paddingBottom: '3em'}}>
                    A place to share ideas and build projects
                </Typography>
                <div id='mainPicture' style={{display: 'flex', alignContent:'flex-end', flexWrap: 'wrap', justifyContent: 'flex-end'}}>

               
                <Container maxWidth="100vh" component="main">
                    <Box id='picture'
                  
                        component="img"
                        sx={{
                            height: '100%',
                            width: '100%'

                        }}
                        alt="Messy Desk"
                        src={IMAGES[0]}
                    
                    />
                </Container>
         

                <Button variant="contained" sx={{color: 'white', backgroundColor: 'black'}} style={{justifyContent: 'flex-end'}}>Browse Projects
                </Button>
                </div>
            </Container>
            {/* End hero unit */}

            {/* Footer */}
            <Container id='footer'
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