import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { jobTypeLoadAction } from '../redux/actions/jobAction';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { jobCreateAction } from '../redux/actions/jobAction';

const JobAddForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, userInfo } = useSelector(state => state.signIn);

    useEffect(() => {
        dispatch(jobTypeLoadAction())
    }, []);

    const { jobType, loading } = useSelector(state => state.jobTypeAll);
    let data = [];
    data = (jobType !== undefined && jobType.length > 0) ? jobType : []

    useEffect(() => {
    }, [])
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            salary: '',
            location: '',
            jobType: '',
            jobSen: ''
        },
        onSubmit: (values, actions) => {
            dispatch(jobCreateAction(values));
            this.forceUpdate();
        }

    })
    return (
        <>
                <Box onSubmit={formik.handleSubmit} component="form">
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "400px" }}>
                        <TextField
                            sx={{
                                my: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="title"
                            label="Pavadinimas"
                            name='title'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Skelbimo pavadinimas"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="description"
                            label="Aprašymas"
                            name='description'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Aprašymas"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="salary"
                            label="Atlyginimas"
                            name='salary'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Atlyginimas"
                            value={formik.values.salary}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.salary && Boolean(formik.errors.salary)}
                            helperText={formik.touched.salary && formik.errors.salary}
                        />
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary'
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="location"
                            name="location"
                            label="Vieta"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Vieta"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.location && Boolean(formik.errors.location)}
                            helperText={formik.touched.location && formik.errors.location}
                        />
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary'
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="jobSen"
                            name="jobSen"
                            label="Darbo tipas"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Darbo tipas"
                            value={formik.values.jobSen}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.jobSen && Boolean(formik.errors.jobSen)}
                            helperText={formik.touched.jobSen && formik.errors.jobSen}
                        />
                         <FormControl variant="standard" sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary'
                                },
                                width:"100%",
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}>
                            <InputLabel>Kategorija</InputLabel>
                            <Select
                            id="jobType"
                            name="jobType"
                            onChange={formik.handleChange}
                            label="Tipas"
                            >
                            {data.map((categ) => <MenuItem value={categ._id}>{categ.jobTypeName}</MenuItem>)}
                            </Select>
                        </FormControl>
                       
                        <Button fullWidth variant="contained" type='submit'>Pridėti</Button>
                    </Box>
                </Box>
        </>
    )
}

export default JobAddForm