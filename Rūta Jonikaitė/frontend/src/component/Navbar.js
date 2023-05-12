import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import SearchInputEl from './SearchInputEl';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const { userInfo } = useSelector(state => state.signIn);
    const { palette } = useTheme();
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="static" sx={{ bgcolor: palette.primary.main }}>
            <Container sx={{
                height: '8vh', display:"flex", pt:1}}>
                    <Link to="/" style={{ color: 'white', textDecoration: "none" }}> 
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' },
                            fontWeight: 700,
                            textDecoration: 'none',
                            textDecorationLine:'none',
                            color:palette.primary.white
                        }}
                    >
                             Karjera Studentams
                    </Typography> 
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    </Box>
                    <SearchInputEl/>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Profilis">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p:0 }}>
                                <MenuIcon sx={{ color: palette.secondary.main, fontSize:50 }}/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            PaperProps={{
                                sx: {
                                    "& 	.MuiMenu-list": {
                                        bgcolor: "primary.white",
                                        color: "white"
                                    },
                                }
                            }}

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
                            {!userInfo ?
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"><Link style={{ textDecoration: "none", color: palette.secondary.main }} to="/login">Prisijungti</Link></Typography>
                                </MenuItem>
                            :
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"><Link style={{ textDecoration: "none", color: palette.secondary.main }} to="/admin/dashboard">Įmonės profilis</Link></Typography>
                                </MenuItem>}
                            {!userInfo ?
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"><Link style={{ textDecoration: "none", color: palette.secondary.main }} to="/register">Registruotis</Link></Typography>
                                </MenuItem>
                            :
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"><Link style={{ textDecoration: "none", color: palette.secondary.main }} to="/user/dashboard">Kandidato profilis</Link></Typography>
                                </MenuItem>}
                        </Menu>
                    </Box>
            </Container>
        </AppBar>
    );
}
export default Navbar;
