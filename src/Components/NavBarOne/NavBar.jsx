import * as React from 'react';
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import VibrationIcon from '@mui/icons-material/Vibration';
import LanguageIcon from '@mui/icons-material/Language';
import Modal from '@mui/material/Modal';

import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { database } from "../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import ModalPage from '../Modal/Modal';
import ModalAlert from '../Modal/ModalAlert';
import { Context } from '../../Context/Context';
const pages = [

    {icon: <VibrationIcon/>,label: 'Support'},
    {icon: <LanguageIcon/>,label: 'Languages'},
    ];
    
function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const [login,setLogin] = React.useState(false);
  const { updateUser } = React.useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAlertOpen = () => setAlert(true);
  const handleAlertClose = () => setAlert(false);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const onSubmit = (data,type) => {
    const email = data.email;
    const password = data.password;
    const name = data.text;
    console.log(email,password,name);
    if(type === "Sign Up"){
    createUserWithEmailAndPassword(database,email,password,name)
    .then(data=> {
      console.log(data);
      navigate('/landingpage');
      updateUser(name);
    }).catch(err => {
      console.log(err);
      handleAlertOpen();
      setLogin(true);
    })
    }else{
    signInWithEmailAndPassword(database,email,password)
    .then(data=> {
      console.log(data);
      navigate('/landingpage');
      updateUser(name);
    }).catch(err => {
     console.log(err)
    })
    }
    
  };
  
  return (
    <AppBar position="static" sx={{background: "#d8dee9",color: "#191919"}} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <FlightTakeoffIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem   key={page.label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <span className='me-2'>{page.icon}</span>
                    <span>{page.label}</span>
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 1,display: { xs: 'none', md: 'flex',justifyContent: "center",marginLeft: '100px'}}}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, 
                    color: '#191919', 
                    display: 'block',
                    textTransform: 'capitalize',
                    ':hover' : {color: "#226ebd"}
                 }}
                className='navbarOne'
              >
                <span className='me-2'>{page.icon}</span>
                <span>{page.label}</span>
              </Button>
            ))}
          </Box>
          <div className='account-button gap-3'>
          <Button variant="outlined" size='small' 
            sx={{
            height: "50%",
            borderRadius: '30px',
            p: {xs : '1px' , md: '5px 20px'},
            fontSize: {xs : '12px', md: '14px'},
            textTransform: "capitalize"}}
            onClick={()=>handleOpen(setLogin(true))}
            >Log in</Button>
            <Button variant="contained" size='small' 
            sx={{
            height: "50%",
            borderRadius: '30px',
            p: {xs : '1px' , md: '5px 20px'},
            fontSize: {xs : '12px', md: '14px'},
            textTransform: "capitalize"}}
            onClick={()=>handleOpen(setLogin(false))}
            >Sign up</Button>
          </div>
          {/*Modal*/}
          <ModalPage open={open} login={login} register={register} handleSubmit={handleSubmit}
          errors={errors} handleClose={handleClose} onSubmit={onSubmit}/>
          {/*Show alert when account is already use*/}
          <ModalAlert alert={alert} handleAlertClose={handleAlertClose}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;