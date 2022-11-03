import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Dialoge from '../components/Dialoge'
import DataTable from '../components/Table'
import TopBar from '../components/TopBar'

function Dashboard() {
  return (
    <Box>
        <TopBar/>
        <Container sx={{mt: "25px",mb: "25px"}}>
            <Dialoge />
        <DataTable />
        </Container>
        
    </Box>
  )
}

export default Dashboard