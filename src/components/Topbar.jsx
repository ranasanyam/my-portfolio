import React, { useState } from 'react';
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
import './Topbar.css';
import { Link } from 'react-scroll';



const pages = ['about', 'skills', 'experience', 'projects', 'contact'];


function Topbar() {
    const [activePage, setActivePage] = useState('about');
  const [anchorElNav, setAnchorElNav] = useState(null);

   
   
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const pageHandler = (page) =>  {
    setActivePage(page);
  }


  return (
    <AppBar position="fixed" style={{ backgroundColor: '#252734', padding: "px 0"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h2"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            style={{ 
                fontFamily: 'Island Moments'
            }}
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontWeight: 600,
              ml: 4,
              fontSize: '72px',
              color: 'inherit',
              letterSpacing: "0.3rem",
              textDecoration: 'none',
              '&:hover': {
                color: '#4BFFA5 !important'
              }
            }}
          >
            SR
          </Typography>
          
           

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
                display: { xs: 'block', md: 'none', justifyContent: 'center' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography 
                  style={{ fontFamily: 'Iceland' }} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Typography
            variant="h2"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            style={{ 
                fontFamily: 'Island Moments'
            }}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 600,
              color: 'inherit',
              textDecoration: 'none',
              letterSpacing: "0.3rem"
            }}
          >
            SR
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link 
              key={page}
              spy={true}
              offset={-120}
              duration={600}
              smooth={true}
              onClick={() => pageHandler(page)} 
              style={{ textDecoration: 'none'}} 
              to={page}
              >
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{ 
                        '&:hover': {
                        // Your hover styles for Typography
                        color: '#4BFFA5 !important', // Change this to your desired hover background color
                    }, color: activePage === page ? '#4BFFA5 !important' : 'inherit', my: 2, display: 'block' }}
                    style={{ fontFamily: 'Iceland', color: '#858792', fontSize: '18px', letterSpacing: "0.1rem", fontWeight: 600}}
                >
                    {page}
                </Button>
              </Link>
            ))}
          </Box>
              <div className='button-container'>
                <div className='center'>
                  <div className='button'>
                    <span style={{ fontFamily: 'NanumGothic'}}>Hire me</span>
                    <svg width="140px" height="60px" viewBox="0 0 180 60" class="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                    </svg>
                  </div>
                </div>
              </div>
    
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Topbar;
