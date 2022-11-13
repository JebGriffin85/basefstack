import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


export default function Navigation({ isLoaded, history }) {
    const theme = createTheme({
        palette: {
            primary: {
                main: 'rgba(239, 239, 239, 0.8)'
            },
            secondary: {
                main: 'rgba(239, 239, 239, 0.8)'
            }
        },

    });

    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const sessionUser = useSelector(state => state.session.user);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    let user;
    if (sessionUser) {
        user = sessionUser.username
    }
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    React.useEffect(() => {
        document.body.style.background = 'rgba(239, 239, 239, 0.8)';
    })
    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        setAnchorEl(null);
        handleCloseUserMenu();
    };

    return (
        <Box>
            <ThemeProvider theme={theme}>
                <AppBar position="fixed" sx={{ boxShadow: 'none' }}>
                    <Container maxWidth="xl" class='outerNav' style={{paddingLeft:'2em', paddingRight:'2em'}}>
                        <Toolbar disableGutters>
                            <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}>
                                <SubtitlesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            </NavLink>
                            <NavLink to='/'>

                            </NavLink>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >

                                    <NavLink to='#about' style={{ textDecoration: 'none', color: 'black' }}>

                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">About</Typography>
                                        </MenuItem>
                                    </NavLink>
                                </Menu>
                            </Box>
                            {/* full screen nav bar */}
                            <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}>
                                <SubtitlesIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                            </NavLink>
                            <Typography
                                variant="h5"
                                noWrap
                                component="div"

                                sx={{
                                    mr: 0,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <NavLink to='#about'>
                                <Button
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    About
                                </Button>
                                </NavLink>
                                <NavLink to='/browse'>
                                <Button
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    Browse
                                </Button>
                                </NavLink>
                            </Box>

                            {/*  right side profile*/}
                            {isLoaded && sessionUser && (
                                <Box sx={{ flexGrow: 0, display: 'flex' }}>
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <AccountCircle sx={{ marginRight: '.3em' }} />
                                        <Typography textAlign="center" >{sessionUser.username}</Typography>
                                    </IconButton>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        <MenuItem onClick={logout}>Logout</MenuItem>
                                    </Menu>
                                </Box>
                            )}
                            {isLoaded && !sessionUser && (

                                <div>
                                    <NavLink to="/login" underline="hover" variant="h6" color="black">
                                        {'Sign in'}
                                    </NavLink>
                                </div>
                            )}
                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </Box>
    );
};
