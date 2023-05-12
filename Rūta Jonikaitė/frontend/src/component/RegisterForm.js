import {Box } from '@mui/material'
import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch} from 'react-redux'
import { userSignUpAction } from '../redux/actions/userAction'

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

const RegisterForm = () => {
    const dispatch = useDispatch();
    useEffect(() => {
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
                            id="firstName"
                            label="First Name"
                            name='firstName'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="First Name"
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
                            label="Last Name"
                            name='lastName'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Last Name"
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
                            label="E-mail"
                            name='email'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="E-mail"
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
                            label="Password"
                            type="password"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />

                        <Button fullWidth variant="contained" type='submit' >Pridėti</Button>
                    </Box>
                </Box>
        </>
    )
}

export default RegisterForm