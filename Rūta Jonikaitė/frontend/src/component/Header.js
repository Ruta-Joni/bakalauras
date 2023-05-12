import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import headerImage from '../images/header.jpg';
import { useTheme } from '@emotion/react';

const Header = () => {
    const { palette } = useTheme();
    const StyleHeader = styled(Box)(({}) => (
        {
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: "70vh",
            boxShadow:'1px 2px 9px #F4AAB9',
            backgroundImage: `url(${headerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            
        }

    ));
    return (
        <>
            <StyleHeader >
            <Typography sx={{fontWeight: 600, color:palette.secondary.main, fontSize:48}}>
                        Karjeros pasiūlymai studentams
            </Typography>
            </StyleHeader>
        </>
    )
}

export default Header