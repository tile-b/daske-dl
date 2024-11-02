import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge'; // Import Badge component
import logo from '../images/daske.png';
import Sidebar from './Sidebar';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#bc9c74' }}>
        <Toolbar
          sx={{
            minHeight: { xs: 72, sm: 120 },
            display: 'flex',
            alignItems: 'center',
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
          <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Flex container for icons */}
            <IconButton
              size="large"
              color="inherit"
              aria-label="cart"
              sx={{ p: 0, mr: 1.5 }} 
            >
              <Badge badgeContent={1} color="primary"> {/* Add Badge here */}
                <ShoppingCartIcon sx={{ fontSize: '25px' }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ p: 0 }} // Remove padding
              
            >
              <Sidebar />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
