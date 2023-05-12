import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import {Stack, Box} from '@mui/material';

const CardElement = ({ jobTitle, description, category, location, id, jobSen, salary }) => {
    const { palette } = useTheme();
    return (
        <Card sx={{ minWidth: 275, mb: 3, mt: 3, bgcolor: palette.primary.white }}>

            <CardContent >
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}>
                    <Typography variant="h5" component="div" sx={{width:"80%"}}>
                        <Link style={{ color:palette.primary.main, fontWeight:600, fontSize:32}}to={`/job/${id}`}>{jobTitle}</Link>
                    </Typography>
                    <Box sx={{ bgcolor:palette.secondary.main, borderRadius:1, p:1, width:110}}>
                        <Typography sx={{color:palette.primary.white, fontWeight:600}}>
                            {jobSen}
                        </Typography>
                    </Box>
                </Stack>
               
                <Typography sx={{ fontSize: 15, color: palette.primary.main, fontWeight: 500 }} gutterBottom>
                    <IconButton><LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} /></IconButton> {location}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Sritis: {category}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Atlyginimas: {salary} eur.
                </Typography>
                <Typography variant="body2">
                    Aprašymas: {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CardElement;