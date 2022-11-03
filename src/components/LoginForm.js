import { Alert, Box, Button, TextField } from '@mui/material'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

// import {useAlert} from 'react-alert'

const loginInfo = {
  username: "",
  password: ""
}
const LoginForm = () => {

  // const alert = useAlert()
  const [login, setLogin] = useState(loginInfo)
  const { username, password } = login
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const handleAddressChange = (e) => {
    const { name, value } = e.target
    setLogin({ ...login, [name]: value })
  }

  const LoginValidation = Yup.object({
    username: Yup.string().required("User Name is required").min(3, "Minimum 6 letter enter"),
    password: Yup.string().required('Password is required').min(6, "Minimum 6 letter enter"),
  })
  const dispatch = useDispatch()
  const {users} = useSelector((state) => state.user)
  const navigate = useNavigate()
  
  const loginSubmit = async () => {
    try {
     const loggedUser= users?.find((user) => (user.username === username || user.email === username) )
     if(loggedUser){
        if(loggedUser.password === password) {
            navigate ("/")
            dispatch({ type: "LOGIN", payload: loggedUser })
         } 
         else {
        setError("Invalid Password")
         }
     } else{
        setError("Invalid Username or Email")
     }
      setMessage(message)

    } catch (error) {
      setMessage("")
      setError(error.response?.data.message)
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
              username,
              password
            }}
            validationSchema={LoginValidation}
            onSubmit={
              () => { loginSubmit() }
            }
          >
            {
              (formik) => (
                <Form>
                  
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
                    name='password'
                    label="Password"
                    id='password'
                    type="password"
                    size='small'
                    onChange={handleAddressChange}
                    helperText={<ErrorMessage name='password' />}
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

export default LoginForm
