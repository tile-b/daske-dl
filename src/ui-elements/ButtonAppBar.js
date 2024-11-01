import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography'; // Import Typography
import { useMediaQuery } from '@mui/material'; // Import useMediaQuery
import logo from '../images/daske.png';

export default function ButtonAppBar() {
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md')); // Check if screen size is medium and up

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#916537' }}>
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
            <img src={logo} alt="logo" style={{ minHeight: '60px', height: '10vw' }} />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} /> {/* Filler to push icons to the right */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              color="inherit"
              aria-label="cart"
              sx={{ p: 0, mr: 1.5 }}
            >
              <Badge badgeContent={1} color="error">
                <ShoppingCartIcon sx={{ fontSize: '20px' }} />
              </Badge>
            </IconButton>
            {isMdUp ? ( // Conditional rendering based on screen size
              <div> {/* Replace MenuIcon with another component or text */}
                <Typography variant="h6" color="inherit">
                  Welcome to Our Store!
                </Typography>
              </div>
            ) : (
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ p: 0 }}
              >
                <MenuIcon sx={{ mr: 1, fontSize: '35px' }} />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
