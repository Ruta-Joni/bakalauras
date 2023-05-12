import { Card, Box, IconButton, Typography, useTheme, Icon } from '@mui/material'
import React from 'react'

const StatComponent = ({ value, icon, description }) => {
    const { palette } = useTheme();
    return (
        <>
            <Box sx={{ bgcolor: palette.secondary.main, height:150, width:"50%", borderRadius:1, p:3}}>
                <Box  sx={{ display: { xs: 'flex', md: 'flex' } }}>
                    <IconButton sx={{ bgcolor: palette.primary.main, color:"white"}} >
                        {icon}
                    </IconButton>
                    <Typography sx={{ color: palette.primary.white, fontSize:20, m:1}}>
                        {description}
                    </Typography>
                </Box>
                    <Typography sx={{ color: palette.primary.white, fontSize:30, fontWeight:600, m:1}}>
                        {value}
                    </Typography>
            </Box>
        </>
    )
}

export default StatComponent