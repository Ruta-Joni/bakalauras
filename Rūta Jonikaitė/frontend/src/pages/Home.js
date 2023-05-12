import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import { Box, Card, Container, ListItemIcon, MenuItem, MenuList, Pagination, Stack, Typography, useTheme } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { jobLoadAction } from '../redux/actions/jobAction'
import { Link, useParams } from 'react-router-dom'
import CardElement from '../component/CardElement'
import Footer from '../component/Footer'
import LoadingBox from '../component/LoadingBox'
import SelectComponent from '../component/SelectComponent'
import { jobTypeLoadAction } from '../redux/actions/jobAction'
import EastIcon from '@mui/icons-material/East';
import SideComponent from '../component/SideComponent'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import usefulLinks from '../data/usefulLinks'

const Home = () => {
    const { jobs, setUniqueSen, setUniqueLocation, pages, loading } = useSelector(state => state.loadJobs);

    const { palette } = useTheme();
    const dispatch = useDispatch();
    const { keyword, jobSen, location} = useParams();

    const [page, setPage] = useState(1);
    const [cat, setCat] = useState('');

    useEffect(() => {
        dispatch(jobLoadAction(page, keyword, cat,jobSen, location));
    }, [page, keyword, cat,jobSen, location]);

    useEffect(() => {
        dispatch(jobTypeLoadAction());
    });
    const handleChangeCategory = (e) => {
        setCat(e.target.value);
    }
    console.log(setUniqueSen);
    return (
        <>
            <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>

                <Navbar />
                <Header />
                <Container sx={{mb:20}}>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                        <Box sx={{ flex: 2, p: 2 }}>
                            <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2, bgcolor: palette.primary.white }}>
                                <Box sx={{ pb: 2 }}>
                                    <Typography component="h4" sx={{ color: palette.primary.main, fontWeight: 600 }}>
                                        Filtruoti pagal sritį
                                    </Typography>
                                </Box>
                                <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat}/>
                            </Card>

                            <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2, bgcolor: palette.primary.white }}>
                                <Box sx={{ pb: 2 }}>
                                    <Typography component="h4" sx={{ color: palette.primary.main, fontWeight: 600 }}>
                                        Filtruoti pagal vietą
                                    </Typography>
                                    <MenuList>
                                             {setUniqueLocation && setUniqueLocation.map((location, i) => (
                                                    <SideComponent 
                                                    linkTo={`/search/location/${location}`}
                                                    title={`${location}`}
                                                    icon={<LocationOnIcon/>}
                                                    ></SideComponent>
                                                 ))
                                             }
                                    </MenuList>
                                    <MenuList>
                                             {setUniqueSen && setUniqueSen.map((sen, i) => (
                                                    <SideComponent 
                                                    linkTo={`/search/jobSen/${sen}`}
                                                    title={`${sen}`}
                                                    icon={<LocationOnIcon/>}
                                                    ></SideComponent>
                                                 ))
                                             }
                                    </MenuList>
                                </Box>
                            </Card>
                            <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2, bgcolor: palette.primary.white }}>
                                <Box sx={{ pb: 2 }}>
                                    <Typography component="h4" sx={{ color: palette.primary.main, fontWeight: 600 }}>
                                        Naudingos nuorodos
                                    </Typography>
                                    <MenuList>
                                            {usefulLinks.map((item, i) => (
                                                    <SideComponent 
                                                    linkTo={item.hyperlink}
                                                    title={item.name}
                                                    icon={<EastIcon/>}
                                                    ></SideComponent>
                                                 ))
                                             }
                                    </MenuList>
                                </Box>
                            </Card>
                        </Box>
                        <Box sx={{ flex: 5, p: 2 }}>
                            {
                                loading ?
                                    <LoadingBox /> :
                                    jobs && jobs.length === 0 ?
                                        <>
                                            <Box
                                                sx={{
                                                    minHeight: '350px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>

                                                <h2>Nerasta rezultatų</h2>
                                            </Box>
                                        </> :
                                          jobs && jobs.map((job, i) => (
                                            <CardElement
                                                key={i}
                                                id={job._id}
                                                jobTitle={job.title}
                                                description={job.description}
                                                category={job.jobType ? job.jobType.jobTypeName : "Sritis nenurodyta"}
                                                location={job.location}
                                                jobSen={job.jobSen}
                                                salary={job.salary}
                                            />
                                        ))
                            }
                            <Stack spacing={2} >
                                <Pagination color="primary" variant="outlined" page={page} count={pages === 0 ? 1 : pages} onChange={(event, value) => setPage(value)} />
                            </Stack>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Home