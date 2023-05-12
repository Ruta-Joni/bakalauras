import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import { Link, useParams } from 'react-router-dom'
import { useTheme } from '@emotion/react';

const SideComponent = ({linkTo, title, icon}) => {
   
    
    const { palette } = useTheme();
    return (
         <MenuItem>
         <IconButton sx={{ color: palette.secondary.main, fontSize: 10 }} >
                        {icon}
                    </IconButton>
            <Link style={{ color: palette.primary.black, textDecorationLine:"none" }} to={linkTo}>{title}</Link>
        </MenuItem>
    )
}

export default SideComponent