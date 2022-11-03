import { Box, Typography } from '@mui/material'
import React from 'react'
import SignupForm from '../components/SignupForm'
import TopBar from '../components/TopBar'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';

function SignUp() {
    return (
        <Box>
            <TopBar />
            <Box m={"12px"}>
          <Typography component="h1" variant="h4" fontWeight={"600"}>
            Signup
          </Typography>

        </Box>
            <Container>
                <Grid container spacing={2}>
                <Grid item xs={4}>
                        
                    </Grid>
                    <Grid item xs={4}>
                        <SignupForm />
                    </Grid>
                    <Grid item xs={4}>
                        
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default SignUp