import React, { useEffect } from 'react'
import { Box, Button, Paper } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { allUserAction, userDeleteAction } from '../../redux/actions/userAction';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import moment from 'moment'
import AddElement from '../../component/AddElement';
import DeleteIcon from '@mui/icons-material/Delete';
import RegisterForm from '../../component/RegisterForm';
const UsersTable = () => {

   
    const dispatch = useDispatch();
    const { users, loading } = useSelector(state => state.allUsers);
    let data = [];

    data = (users !== undefined && users.length > 0) ? users : [];

    useEffect(() => {
        dispatch(allUserAction());
    }, []);

    const deleteUserById=(e, id)=>{
        e.preventDefault();
        dispatch(userDeleteAction(id));
        dispatch(allUserAction());
    }
    return (
        <>
            <Box >
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <caption>
                    <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
                        <AddElement buttonName="Pridėti vartotoją" formToAdd={<RegisterForm></RegisterForm>} />
                    </Box>
                    </caption>
                    <TableHead>
                    <TableRow>
                        <TableCell align='left'>ID</TableCell>
                        <TableCell align="left">El.paštas</TableCell>
                        <TableCell align="left">Vardas</TableCell>
                        <TableCell align="left">Pavardė</TableCell>
                        <TableCell align="left">Statusas</TableCell>
                        <TableCell align="left">Prisijungimo data</TableCell>
                        <TableCell align="right">Veiksmai</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((data) => (
                        <TableRow key={data.name}>
                        <TableCell align='left'>
                            {data._id}
                        </TableCell>
                        <TableCell align="left">{data.email}</TableCell>
                        <TableCell align="left">{data.firstName}</TableCell>
                        <TableCell align="left">{data.lastName}</TableCell>
                        <TableCell align="left">
                        {data.role === 1 ? "Administratorius" : "Studentas"}
                        </TableCell>
                        <TableCell align="left">
                        {moment(data.createdAt).format('YYYY-MM-DD HH:MM:SS')}
                        </TableCell>
                        <TableCell align="right">
                            <Box >
                                <Button onClick={(e)=>deleteUserById(e,data._id)} variant="contained" color="error"><DeleteIcon></DeleteIcon></ Button>
                            </Box>
                        </TableCell>
                        </TableRow> 
                    ))}
                    
                    </TableBody>
                </Table>
                </TableContainer>
            </Box>

            
        </>
    )
}

export default UsersTable