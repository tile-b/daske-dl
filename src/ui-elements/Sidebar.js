import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import serv from '../images/servirana.jpg';
import satMenu from '../images/satOne.jpg';
import { Divider, Grid } from '@mui/material';
import Slide from '@mui/material/Slide';

const CustomDrawerTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide ref={ref} {...props} direction="down" timeout={800} />;
});

export default function Sidebar() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ top: open });
  };

  // Function to render the cards instead of the list
  const renderCards = () => (
    <Box
      sx={{ width: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, bgcolor: '#996f2f7a' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}> {/* Adjusts for different screen sizes */}
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={serv}
                alt="Daske za Serviranje"
              />
              <CardContent sx={{ background: '#ffd0954a' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Daske za Serviranje
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Ručno rađene daske visokog kvaliteta,
                  izrađene od drveta po želji, pružaju jedinstvenu estetiku i dugotrajnost. Idealne su za serviranje hrane ili kao dekoracija u vašem domu.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}> {/* Adjusts for different screen sizes */}
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={satMenu}
                alt="Unikatni Satovi"
              />
              <CardContent sx={{ background: '#ffd0954a' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Unikatni Satovi
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Ručno rađeni satovi, svaki unikatnog dizajna, donose prirodnu lepotu i toplinu u svaki prostor.
                  Izrađeni su od pažljivo odabranih vrsta drva, što im daje jedinstven karakter i dugotrajnost.
                  Pravi umetnički dodaci za vaš dom.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />
      <IconButton onClick={toggleDrawer(false)} sx={{ color: 'text.primary' }}>
        <ExpandLessIcon /> {/* Upward arrow icon to close the drawer */}
      </IconButton>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ color: 'white' }} /> {/* Set the color to white */}
      </IconButton>
      <Drawer
        anchor="top" // Only use top anchor
        open={state.top}
        onClose={toggleDrawer(false)}
        TransitionComponent={CustomDrawerTransition} // Use the custom transition
      >
        {renderCards()} {/* Use the renderCards function here */}
      </Drawer>
    </div>
  );
}
