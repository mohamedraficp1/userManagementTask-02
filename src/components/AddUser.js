import { Alert, Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

// import {useAlert} from 'react-alert'

const signupInfo = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  confirmpassword: "",
}
const AddUser = ({ handleClose, setOpenForm }) => {

  // const alert = useAlert()
  const [signup, setSignup] = useState(signupInfo)
  const { firstname, lastname, username, email, password, confirmpassword } = signup

  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  
  const handleAddressChange = (e) => {
    const { name, value } = e.target
    setSignup({ ...signup, [name]: value })
  }

  const SignupValidation = Yup.object({
    firstname: Yup.string().required("First Name is required").min(3, "Minimum 6 letter enter"),
    lastname: Yup.string().required("Last Name is required").min(2, "Minimum 6 letter enter"),
    username: Yup.string().required("User Name is required").min(3, "Minimum 6 letter enter"),
    email: Yup.string().required("Email Address required").email("Please enter valid email address").max(100),
    password: Yup.string().required('Password is required').min(6, "Minimum 6 letter enter"),
    confirmpassword: Yup.string().required("Confirm Password required")
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  })
  const dispatch = useDispatch()
  const signupSubmit = async () => {
    try {
      dispatch({
        type: "SIGNUP", payload:
        {
          firstname: firstname,
          lastname: lastname,
          username: username,
          email: email,
          password: password
        }
      })
       const new_User = axios.post("https://reqres.in/api/users", 
       {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password
      }
       )
      setError("")
      setMessage(message)
      

    } catch (error) {
      setMessage("")
      // setError(error.response.data.message)
      console.log(error)
    }
  }
  return (
    <>
      <Box className='addressBox'>
        {
          error && <Alert severity='error'>{error}</Alert>
        }
        <Box>
          <Formik
            enableReinitialize
            initialValues={{
              firstname,
              lastname,
              username,
              email,
              password,
              confirmpassword
            }}
            validationSchema={SignupValidation}
            onSubmit={
              () => { signupSubmit() }
            }
          >
            {
              (formik) => (
                <Form>
                  <Field as={TextField}
                    margin='normal'
                    fullWidth
                    name='firstname'
                    label="First Name"
                    id='firstname'
                    type="name"
                    size='small'
                    onChange={handleAddressChange}
                    helperText={<ErrorMessage name="firstname" />}
                    autoComplete="nope"
                  />
                  <Field as={TextField}
                    margin='normal'
                    fullWidth
                    name='lastname'
                    label="Last Name"
                    id='lastname'
                    type="name"
                    size='small'
                    onChange={handleAddressChange}
                    helperText={<ErrorMessage name="lastname" />}
                    autoComplete="nope"
                  />
                  <Field as={TextField}
                    margin='normal'
                    fullWidth
                    name='username'
                    label="User Name"
                    id='username'
                    type="name"
                    size='small'
                    onChange={handleAddressChange}
                    helperText={<ErrorMessage name="username" />}
                    autoComplete="nope"
                  />
                  <Field as={TextField}
                    margin='normal'
                    fullWidth
                    name='email'
                    label="Email Address"
                    id='email'
                    type="email"
                    size='small'
                    onChange={handleAddressChange}
                    helperText={<ErrorMessage name="email" />}
                    autoComplete="nope"
                  />
                  <Field as={TextField}
                    margin='normal'
                    fullWidth
                    name='password'
                    label="Password"
                    id='password'
                    type="password"
                    size='small'
                    onChange={handleAddressChange}
                    helperText={<ErrorMessage name='password' />}
                  />
                  <Field as={TextField}
                    margin='normal'
                    fullWidth
                    name='confirmpassword'
                    label="Confirm Password"
                    id='confirmpassword'
                    type="password"
                    size='small'
                    onChange={handleAddressChange}
                    helperText={<ErrorMessage name='confirmpassword' />}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}>Submit</Button>
                </Form>
              )
            }
          </Formik>
        </Box>
      </Box>
      {/* {
                message && alert.success(message)
            } */}
    </>
  )
}

export default AddUser
