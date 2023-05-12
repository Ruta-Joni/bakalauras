import React, { useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {Link} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { userLogoutAction, userProfileAction } from '../../redux/actions/userAction';
import { Button } from '@mui/material';

const HeaderTop = () => {
    const { user } = useSelector(state => state.userProfile);
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(userProfileAction());
    }, []);

    const logOut = () => {
        dispatch(userLogoutAction());
        setTimeout(() => {
            navigate('/');
        }, 500)
        window.location.reload(true);

    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ boxShadow: 0, bgcolor: palette.primary.main }}>
                <Toolbar>
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
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', fontWeight:400 } }}
                    >
                          Vartotojas:  {user && user.firstName} {user && user.lastName}  
                    </Typography>
                    <Button onClick={logOut}>
                           <Typography sx={{ color: palette.primary.white}}>
                            Atsijungti
                            </Typography>
                            <LoginIcon sx={{color:palette.primary.white, ml:1}}></LoginIcon>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeaderTop;