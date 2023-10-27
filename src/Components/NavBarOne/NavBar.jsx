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
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import { FormLabel } from '@mui/material';

const pages = [
    {icon: <VibrationIcon/>,label: 'Support'},
    {icon: <LanguageIcon/>,label: 'Languages'},
    ];

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '1px solid #eceff4',
      borderRadius: '5px',
      boxShadow: 24,
      p: 4,
    };
    
function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
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
                key={page}
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
            p: {xs : '0px' , md: '5px 20px'},
            fontSize: {xs : '12px', md : '14px'},
            textTransform: "capitalize",
            }}>Log in</Button>
            <Button variant="contained" size='small' 
            sx={{
            height: "50%",
            borderRadius: '30px',
            p: {xs : '1px' , md: '5px 20px'},
            fontSize: {xs : '12px', md: '14px'},
            textTransform: "capitalize"}}
            onClick={handleOpen}
            >Sign up</Button>
          </div>
          {/*Modal*/}
          <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h5" component="h2" color="#226ebd" fontWeight="700">
              Sign Up
            </Typography>
            <FormLabel sx={{fontSize: '18px',mt: '40px',mb: '5px'}}>
              Name
              <span style={{ color: 'red',fontSize: '12px',marginLeft: '14.5rem',marginRight: '3px'}}>*</span>
              <span style={{ color: 'red',fontSize: '12px'}}>required</span>
            </FormLabel>
            <TextField
            id="demo-helper-text-misaligned"
            label="Enter your name"
            size='small'
            sx={{
              width: '100%',
              mb: '20px',
            }}
            />

            <FormLabel sx={{fontSize: '18px',mb: '5px'}}>
              Email
              <span style={{ color: 'red',fontSize: '12px',marginLeft: '14.5rem',marginRight: '3px'}}>*</span>
              <span style={{ color: 'red',fontSize: '12px'}}>required</span>
            </FormLabel>
            <TextField
            id="demo-helper-text-misaligned"
            label="Enter your email"
            size='small'
            sx={{width: '100%',mb: '20px'}}
            />

            <FormLabel sx={{ fontSize: '18px',mb: '5px'}}>
            Password
              <span style={{ color: 'red',fontSize: '12px',marginLeft: '12.5rem',marginRight: '3px'}}>*</span>
              <span style={{ color: 'red',fontSize: '12px'}}>required</span>
            </FormLabel>
            <TextField
            id="demo-helper-text-misaligned"
            label="Enter your password"
            size='small'
            sx={{width: '100%',mb: '30px'}}
            />
            <Button variant='contained' sx={{marginLeft: '35%'}}>Sign Up</Button>
          </Box>
        </Fade>
      </Modal>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;