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






export default function Navigation({ isLoaded }) {

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: "#fffff" 
            },
            secondary: {
                main: "#00000" //Another orange-ish color
            }
        }
    });

    const dispatch = useDispatch();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const sessionUser = useSelector(state => state.session.user);

    let user;
       if (sessionUser) {
        user = sessionUser.username
    }
    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (isLoaded &&
        <Box sx={{ flexGrow: 1 }}>
           
                <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    
                    <IconButton onClick={handleMenu}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <Menu
                            id="menu-appbar"
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
                            <MenuItem onClick={handleClose}>ghg</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </Typography>
                        {isLoaded && sessionUser && (
                        
                            <div> 
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "inline", whiteSpace: "noWrap" }} noWrap={true}>
                                Welcome {user}
                            </Typography>
                                <FormGroup>
                                    <LogoutIcon />
                                    <FormControlLabel
                                        control={
                                            <IconButton
                                            startIcon={LogoutIcon}
                                            size="small"
                                            checked={sessionUser}
                                            onClick={logout}
                                            aria-label="login switch"
                                            color="warning"
                                            />
                                        }
                                        label={auth ? 'Logout' : 'Login'}
                                        />
                                </FormGroup>
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
