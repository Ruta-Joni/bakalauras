import { Box, Stack, Typography } from '@mui/material';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import { useTheme } from '@mui/material'
import {useDispatch, useSelector } from 'react-redux';
import { jobLoadAction } from '../../redux/actions/jobAction.js';
import StatComponent from '../../component/StatComponent.js';
import React, { useEffect } from 'react'
import HeaderTop from './HeaderTop.js';


const AdminDashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(jobLoadAction())
    }, []);
   
    const { palette } = useTheme();
    const { users, loading } = useSelector(state => state.allUsers);
    let { jobs, loading1} = useSelector(state => state.loadJobs);
    let jobData = (jobs !== undefined && jobs.length > 0) ? jobs : []
    return (
        <>
            <Box  sx={{width:"95%", m:3, mb:15}}>
                <Typography variant="h4" sx={{ color: palette.primary.main, fontWeight:600, pb: 3 }}>
                    Administratoriaus aplinka
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                     <StatComponent
                        value={users.length}
                        icon={<SupervisorAccountIcon sx={{fontSize: 30}} />}
                        description="Vartotojų sistemoje"
                    />
                    <StatComponent
                        value={jobData.length}
                        icon={<WorkIcon sx={{fontSize: 30}} />}
                        description="Darbo skelbimų"
                    />
                </Stack>
            </Box>
            
        </>

        
    )
}

export default AdminDashboard