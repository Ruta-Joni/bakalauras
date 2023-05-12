import { Avatar, Box } from '@mui/material'
import React, { useEffect } from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { userSignUpAction } from '../redux/actions/userAction'
import { useNavigate } from 'react-router-dom'

const validationSchema = yup.object({
    firstName: yup
        .string('Įveskite vardą')
        .min(3, 'Vardą turi sudaryti bent 3 ženklai')
        .required('Vardas privalomas'),
    lastName: yup
        .string('Įveskite pavardę')
        .min(3, 'Pavardę turi sudaryti bent 3 ženklai')
        .required('Pavardė privaloma'),
    email: yup
        .string('Įveskite el.paštą')
        .email('Neteisingas el.pašto formatas')
        .required('El.paštas privalomas'),
    password: yup
        .string('Įveskite slaptažodį')
        .min(8, 'Slaptažodį turi sudaryti bent 8 ženklai')
        .required('Slaptažodis privalomas'),
});



const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, userInfo } = useSelector(state => state.signIn);

    useEffect(() => {

         if (isAuthenticated) {
            if (userInfo.role === 1) {
                 navigate('/admin/dashboard');
             } else {
                navigate('/user/dashboard');
            }
        }
    }, [])

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            dispatch(userSignUpAction(values));
            actions.resetForm();
        }

    })

    return (
        <>
            <Navbar />
            <Box sx={{ height: '85vh', display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "primary.white" }}>


                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                            <LockOpenIcon />
                        </Avatar>
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="firstName"
                            label="Vardas"
                            name='firstName'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Įveskite vardą"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
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
                            id="lastName"
                            label="Pavardė"
                            name='lastName'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Įveskite pavardę"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
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
                            id="email"
                            label="El.paštas"
                            name='email'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Įveskite el.paštą"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
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
                            id="password"
                            name="password"
                            label="Slaptažodis"
                            type="password"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Įveskite slaptažodį"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />

                        <Button fullWidth variant="contained" type='submit' >Registruotis</Button>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Register