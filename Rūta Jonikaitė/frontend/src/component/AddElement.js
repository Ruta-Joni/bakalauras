import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux'
import RegisterForm from './RegisterForm';

const AddElement=({ buttonName, formToAdd })=> {

    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <>
        <Box sx={{ py: 2, display: "flex", justifyContent: "right" }}>
           <Button  onClick={handleClickOpen} variant='contained' color="success">{buttonName} </Button> 
        </Box>
         
            <Box >
                <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{pb:2}}>Pridėti vartotoją</DialogTitle>
                <DialogContent>
                    {formToAdd}
                </DialogContent>
            </Dialog>
            </Box>
        </>
    );
}
export default AddElement