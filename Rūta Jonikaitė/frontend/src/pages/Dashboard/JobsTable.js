import React, { useEffect } from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { jobLoadAction, jobDeleteAction } from '../../redux/actions/jobAction';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import JobAddForm from '../../component/JobAddForm';
import AddElement from '../../component/AddElement';

const JobsTable = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobLoadAction())
    }, []);


    const { jobs, loading } = useSelector(state => state.loadJobs);
    let data = [];
    data = (jobs !== undefined && jobs.length > 0) ? jobs : []

    //delete job by Id
    const deleteJobById = (e, id) => {
        e.preventDefault();
        dispatch(jobDeleteAction(id));
        dispatch(jobLoadAction());
    }
   
   const headers =["Darbo pavadinimas", "Įkėlė vartotojas", "Alga", "Tipas", "Veiksmai"];
   const headerItems = headers.map((header) =>
    <TableCell align="left">{header}</TableCell>
    );     
        

    return (
            <Box >
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <caption>
                    <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
                    <AddElement buttonName="Pridėti skelbimą" formToAdd={<JobAddForm></JobAddForm>} />
                    </Box>
                    </caption>
                    <TableHead>
                    <TableRow>
                        {headerItems}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((data) => (
                        <TableRow key={data.name}>
                        <TableCell align='left'>
                            {data.title}
                        </TableCell>
                        <TableCell align="left">{data.jobType.jobTypeName}</TableCell>
                        <TableCell align="left">
                            {data.user._id}
                        </TableCell>
                        <TableCell align="left">
                            {data.salary}
                        </TableCell>
                        <TableCell align="left">
                        <Box >
                            <Button onClick={(e)=>deleteJobById(e,data._id)} variant="contained" color="error"><DeleteIcon></DeleteIcon></ Button>
                        </Box>
                        </TableCell>
                        </TableRow> 
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Box>   
    )
}

export default JobsTable