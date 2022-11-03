import * as React from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Dropdown from './Dropdown';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomizedTables() {
    const [users, setUsers]=  React.useState([])
    React.useEffect(() => {
        getData()
    }, [])
    const getData = async()=>{
        const {data}  = await axios.get('https://reqres.in/api/users?page=2')
        setUsers(data.data)
    }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sl</StyledTableCell>
            <StyledTableCell align="right">First name</StyledTableCell>
            <StyledTableCell align="right">Last Name&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Email&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Avatar&nbsp;</StyledTableCell>
            <StyledTableCell align="right">ACtion&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row,i) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {i+1}
              </StyledTableCell>
              <StyledTableCell align="right">{row.first_name}</StyledTableCell>
              <StyledTableCell align="right">{row.last_name}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right"><img src={row.avatar} alt ={row.name} className={"avatarImage"}/></StyledTableCell>
              <StyledTableCell align="right"><Dropdown/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

