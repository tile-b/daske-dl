import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge'; // Import Badge component
import logo from '../images/daske.png';
import Sidebar from './Sidebar';
import '../css/underline.css'
import Dropdown from './Dropdown'




export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, mt: { xs: '72px', sm: '120px' } }}> 
<AppBar 
  position="fixed" 
  sx={{ 
    backgroundColor: '#bc9c74', 
    zIndex: (theme) => theme.zIndex.drawer + 1 // Ensure AppBar is above the drawer
  }}
>

        <Toolbar
          sx={{
            minHeight: { xs: 72, sm: 120 },
            width: {md: '80%'},
            display: 'flex',
            alignItems: 'center',
            mx: {md: 'auto'}
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, ':hover': { backgroundColor: 'transparent' } }}
          >
            <img src={logo} alt="logo" style={{ minHeight: '100px', height: '6vw' }} />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} /> {/* Filler to push icons to the right */}

  
      {/* dropdown */}
      <Dropdown/>


          <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Flex container for icons */}
            <IconButton
              size="large"
              color="inherit"
              aria-label="cart"
              sx={{ p: 0, mr: 1.5, ml: 1.5 }} 
            >
              <Badge badgeContent={0} color="primary"> {/* Add Badge here */}
                <ShoppingCartIcon sx={{ fontSize: '25px' }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ p: 0, display: {md: 'none'} }} // Remove padding         
            >
              <Sidebar />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
