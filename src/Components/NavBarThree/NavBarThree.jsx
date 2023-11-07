import * as React from 'react';
import './NavBarThree.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../../assets/logo.png';
import { MenuItem } from '@mui/material';
import { signOut } from 'firebase/auth';
import { database } from '../../Firebase/Firebase';
import { useNavigate } from 'react-router';
import { Context } from '../../Context/Context';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { DropdownMenu,DropdownItem } from 'reactstrap';
const pages = [
  { 
    id: 1,
    name: 'Home',
    path: '#home',
  },
  {
    id: 2,
    name: 'Destinations',
    path: '#destinations',
  },
  {
    id: 3,
    name: 'Offers',
    path: '#offers',
  },
  {
    id: 4,
    name: 'Seats',
    path: '#seats',
  },
  {
    id: 5,
    name: 'About',
    path: '#about',
  },
];

function NavBarThree() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [persistName,setPersistName] = React.useState(()=> {
    return localStorage.getItem('persistName')  || 'null';
  });
  const { username } = React.useContext(Context);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = () => {
    localStorage.removeItem('username');
    signOut(database)
    .then(val => {
        navigate('/');
        console.log(val)
    })
  };
  React.useEffect(() => {
    if(username) {
      setPersistName(username);
      localStorage.setItem('persistName', username);
    }
  }, [username]);
  return (
    <AppBar position="sticky" sx={{background: "#eceff4",top: '0'}} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src={logo} alt='brand-img' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, }}
        className='landingNav-img'/>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color: '#191919'}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}  className='page-path'>
                  <Typography textAlign="center" fontSize="15px">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className='box'>
            {pages.map((page,index) => (
              <Button
                key={index}
                href={page.path}
                onClick={handleCloseNavMenu}
                sx={{ 
                    my: 2,
                    color: '#191919', 
                    display: 'block', 
                    textTransform: 'capitalize',
                    mr: '50px',
                    ':hover' : {color: "#226ebd"}}}
                 >
                <span>{page.name}</span>
              </Button>
            ))}
          </Box>
          <div className='account-div'>
            <AccountCircleRoundedIcon sx={{color: 'gray',fontSize: '30px'}}/>
            <h1>{persistName}</h1>
            <div>
              <div className='dropdown-toggle' data-bs-toggle="dropdown"></div>
              <DropdownMenu className="dropdown-menu">
                <DropdownItem className="dropdown-item" onClick={handleClick}>Log out</DropdownItem>
              </DropdownMenu>
              </div>
          </div>
      
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBarThree;