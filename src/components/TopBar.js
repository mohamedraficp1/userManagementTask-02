import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function TopBar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {loggedUser}= useSelector((state) => state.user)
  const loginHandler =()=>{
    navigate('/')
  }

  const logoutHandler =()=>{
    dispatch({type: 'LOGOUT'})
    navigate('/login')
  }
  console.log(loggedUser)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Panel
          </Typography>
          {loggedUser ? `Hi ${loggedUser.firstname} ${loggedUser.firstname}`: "" }
          {loggedUser ? <Button color="inherit" onClick={logoutHandler}>Logout</Button>: <Button color="inherit"  onClick={loginHandler}>Login</Button> }
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
