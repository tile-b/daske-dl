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
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { SiViber } from 'react-icons/si';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


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
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={serv}
                alt="Daske za Serviranje"
              />
              <CardContent sx={{ background: '#ffd0954a' }}>
                <Typography gutterBottom variant="h6" component="div">
                  Daske za Serviranje
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '12px',color: 'text.secondary' }}>
                  Ručno rađene daske visokog kvaliteta,
                  izrađene od drveta po želji, pružaju jedinstvenu estetiku i dugotrajnost. Idealne su za serviranje hrane ili kao dekoracija u vašem domu.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}> {/* Adjusts for different screen sizes */}
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={satMenu}
                alt="Unikatni Satovi"
              />
              <CardContent sx={{ background: '#ffd0954a' }}>
                <Typography gutterBottom variant="h6" component="div">
                  Unikatni Satovi
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '12px',color: 'text.secondary' }}>
                  Ručno rađeni satovi, svaki unikatnog dizajna, donose prirodnu lepotu i toplinu u svaki prostor.
                  Izrađeni su od pažljivo odabranih vrsta drva, što im daje jedinstven karakter i dugotrajnost.
                  Pravi umetnički dodaci za vaš dom.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 4,mb: 1, width: '100%',borderWidth: '1px' }} />
      {/* socials  #983647*/}

  <Box
    sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between', // Space between phone icon and social icons
      pr: 1, // Padding on the right
    }}
  >
<IconButton onClick={() => window.open('tel:+381637856855')}>
      <PhoneIcon sx={{ color: '#844747', fontSize: '40px' }} />
    </IconButton>

    <Box
      sx={{
        display: 'flex',
        gap: 0.5, // Space between social icons
      }}
    >
<IconButton onClick={() => window.open('https://www.instagram.com/daske_dl/', '_blank')}>
      <InstagramIcon sx={{ color: '#844747e0', fontSize: '40px' }} />
    </IconButton>
    <IconButton onClick={() => window.open('https://wa.me/+381637856855', '_blank')}>
      <WhatsAppIcon sx={{ color: '#844747e0', fontSize: '40px' }} />
    </IconButton>
    <IconButton onClick={() => window.open('viber://chat?number=+381637856855')}>
      <SiViber style={{ color: '#844747e0', fontSize: '40px' }} />
    </IconButton>
    </Box>
  </Box>
  <Divider sx={{ mt: 1,mb: 2, width: '100%',borderWidth: '1px' }} />

      <IconButton onClick={toggleDrawer(false)} sx={{ color: 'text.primary' }}>
        <ExpandLessIcon  sx={{fontSize: '30px', color: '#844747'}}/> {/* Upward arrow icon to close the drawer */}
      </IconButton>
    </Box>
  );

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" onClick={toggleDrawer(true)} sx={{mx: '10px'}}>
      <MenuIcon sx={{fontSize: '30px'}}/>
      <KeyboardArrowDownIcon sx={{ mt: -1.7 }} /> {/* Adjust margin to move closer */}
    </Box>
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
