import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';

const SelectComponent = ({handleChangeCategory, cat}) => {
    const { jobType } = useSelector(state => state.jobTypeAll);
    const { palette } = useTheme();
    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel>Sritis</InputLabel>
            <Select
                inputProps={{
                    MenuProps: {
                        MenuListProps: {
                            sx: {
                                backgroundColor: palette.primary.white
                            }
                        }
                    }
                }}
                value={cat}
                label="Sritis"
                onChange={handleChangeCategory}
            >
                <MenuItem value="">Visi</MenuItem>
                {
                    jobType && jobType.map(jt => (
                        <MenuItem key={jt._id} value={jt._id}>{jt.jobTypeName}</MenuItem>
                    ))
                }


            </Select>
        </FormControl>
    </Box>
    )
}

export default SelectComponent