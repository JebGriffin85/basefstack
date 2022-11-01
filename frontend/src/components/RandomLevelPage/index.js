import React from 'react';
import ReactDOM from 'react-dom';
import s from './keys/key1.mp3'



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


function testPlay () {
    let note = new Audio(s);
    note.play()
}
  
async function runSong() {
    testPlay()
console.log('yes')
}

export default function RandomLevelPage(props) {
    return (
        <React.Fragment>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        
        {/* Hero unit */}
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Key Themes
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" component="p">
                A game where you use your trivia skills to play the theme song of a movie.  Create your own level and join the community.
            </Typography>
            <Container maxWidth="100vh" component="main">
              
            </Container>
        </Container>
        {/* End hero unit */}

        {/* Footer */}
       
    </React.Fragment>

    );
}