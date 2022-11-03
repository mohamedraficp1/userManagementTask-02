import { Box, Typography } from '@mui/material'
import React from 'react'
import TopBar from '../components/TopBar'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <Box>
    <TopBar />
    <Box m={"12px"}  mt={"40px"}>
  <Typography component="h1" variant="h4" fontWeight={"600"}>
    Login
  </Typography>

</Box>
    <Container>
        <Grid container spacing={2}  >
        <Grid item xs={4}>
               
            </Grid>
            <Grid item xs={4}>
                <LoginForm />
            </Grid>
            <Grid item xs={4}>
                
            </Grid>
        </Grid>
    </Container>
</Box>
)
}

export default Login