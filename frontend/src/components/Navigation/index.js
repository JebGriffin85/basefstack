
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import Link from '@mui/material/Link';
import LogoutIcon from '@mui/icons-material/Logout';
import SubtitlesIcon from '@mui/icons-material/Subtitles';





export default function Navigation({ isLoaded, history}) {

    React.useEffect(() => {
        document.body.style.background = 'rgba(239, 239, 239, 0.8)';
    })
    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        setAnchorEl(null);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: 'rgba(239, 239, 239, 0.8)'
            },
            secondary: {
                main:'rgba(239, 239, 239, 0.8)' 
            }
        }
    });

    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const sessionUser = useSelector(state => state.session.user);

    let user;
       if (sessionUser) {
        user = sessionUser.username
    }

    const navHome = () => {
       
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (isLoaded &&
        <Box >
           {/* {console.log(history.location)} */}
                <ThemeProvider theme={theme}>
                <AppBar position="fixed" sx={{textAlign:'center', display: 'flex', boxShadow: 'none',backgroundColor:'rgba(239, 239, 239, 0.8)' }} >
                <Toolbar>
                    
                            <NavLink to='/' style={{textDecoration: 'none', color: 'black'}}>
                            <SubtitlesIcon style={{marginTop: '6px'}}/>
                            </NavLink>
                    
                        <Toolbar>
                            <NavLink to='/funMode' style={{textDecoration: 'none', color: 'black'}}>
                            <Typography variant="h6" component="div" sx={{  paddingRight: 2 }}>
                                About
                            </Typography>
                            </NavLink>
                            <Typography variant="h6" component="div" sx={{  paddingRight: 2 }}>
                                Link 2
                            </Typography>
                            </Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        </Typography>
                       
                        {isLoaded && sessionUser && (
                        
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                    <Typography variant="h6" component="div" sx={{  paddingLeft: 2, paddingTop: .5 }}>{user}</Typography>
                                </IconButton>
                                <Menu
                                    id="profile"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={logout}>Logout</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        
                    )}
                        {isLoaded && !sessionUser &&(

                            <div>
                                <Link href="/login" underline="hover" variant="h6" color="black">
                                    {'Sign in'}
                                </Link>
                               
                            </div>

                        )}
                </Toolbar>
            </AppBar>
                </ThemeProvider>
        </Box>
    );
}
