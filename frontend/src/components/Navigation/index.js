// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';


// function Navigation({ isLoaded }) {
//     const sessionUser = useSelector(state => state.session.user);

//     let sessionLinks;
//     if (sessionUser) {
//         sessionLinks = (
//             <ProfileButton user={sessionUser} />
//         );
//     } else {
//         sessionLinks = (
//             <>
//                 <NavLink to="/login">Log In</NavLink>
//                 <NavLink to="/signup">Sign Up</NavLink>
//             </>
//         );
//     }

//     return (
//         <ul>
//             <li>
//                 <NavLink exact to="/">Home</NavLink>
//                 {isLoaded && sessionLinks}
//             </li>
//         </ul>
//     );
// }

// export default Navigation;
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
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import Link from '@mui/material/Link';
import LogoutIcon from '@mui/icons-material/Logout';
import PianoIcon from '@mui/icons-material/Piano';





export default function Navigation({ isLoaded }) {

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        setAnchorEl(null);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: "#ffffff" 
            },
            secondary: {
                main: "#000000" 
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
           
                <ThemeProvider theme={theme}>
                <AppBar position="static" sx={{ boxShadow: 0, borderBottom: 1 }} >
                <Toolbar>
                            <NavLink to='/' >
                                <PianoIcon sx={{ paddingTop: .5 }} style={{ cursor: 'pointer' }} onClick={navHome} />
                            </NavLink>
                        <Toolbar>
                            <NavLink to='/' style={{textDecoration: 'none', color: 'black'}}>
                            <Typography variant="h6" component="div" sx={{  paddingRight: 2 }}>
                                Fun Mode
                            </Typography>
                            </NavLink>
                            <Typography variant="h6" component="div">
                                test
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
