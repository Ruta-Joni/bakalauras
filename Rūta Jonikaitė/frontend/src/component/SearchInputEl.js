import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, InputBase } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';


const validationSchema = yup.object({
    search: yup
        .string('Įveskite paieškos frazę')
        .required('Laukas negali būti tuščias!'),
});

const SearchInputEl = () => {
    const { palette } = useTheme();
    const navigate = useNavigate();

    const onSubmit = (values, actions) => {
        const { search } = values;
        if (search.trim()) {
            navigate(`/search/${search}`);
        } else {
            navigate('/');
        }
        actions.resetForm();
    }

    const { values, errors, touched, handleChange, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            search: '',
        },

        validationSchema: validationSchema,
        onSubmit
    });

    return (

        <form onSubmit={handleSubmit} style={{ width: '50%' }}>
            <Box sx={{  width: '70%', display: 'flex', justifyContent: 'center' }}>
                <InputBase sx={{bgcolor: 'white', padding: '3px', color: "rgba(0, 0, 0, 0.9)" }}
                    fullWidth={true}
                    id="search"
                    name="search"
                    label="search"
                    placeholder='Įveskite paieškos frazę'
                    value={values.search}
                    onChange={handleChange}
                    error={touched.search && Boolean(errors.search)}
                />

                <Button sx={{ bgcolor: palette.secondary.main }}variant="contained" type="submit" disabled={isSubmitting}>
                    <SearchIcon></SearchIcon>
                </Button>
            </Box>
            <Box component='span' sx={{ color: palette.primary.white }}>{touched.search && errors.search}</Box>
        </form>

    );
};

export default SearchInputEl;


