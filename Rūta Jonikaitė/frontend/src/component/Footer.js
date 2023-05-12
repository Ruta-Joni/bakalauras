import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const { palette } = useTheme();
    return (
        <>
            <Box sx={{
                height: '7vh',
                bgcolor: palette.primary.main,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position:"fixed",
                left:0,
                bottom:0,
                right:0
            }}>
                <Box component='span' sx={{ color: palette.primary.white }}>Rūta Jonikaitė MKDf-19/1</Box>
                <Box component='span' sx={{ color: palette.primary.white }}>Baigiamasis bakalauro darbas 2023</Box>
            </Box>
        </>
    )
}

export default Footer