import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';

import serv from '../images/servirana.jpg'
import sat from '../images/satOne.jpg'

import '../css/drop.css'
import { Divider } from '@mui/material';


const CustomDrawerTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide ref={ref} {...props} direction="down" timeout={600} />;
});

export default function Dropdown() {
  const [state, setState] = React.useState({
    top: true,
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
  sx={{
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    p: 2,
    bgcolor: '#996f2f7a',
    pt: '180px',
    pb: '40px',
  }}
  role="presentation"
  onClick={toggleDrawer(true)}
  onKeyDown={toggleDrawer(true)}
  onMouseLeave={toggleDrawer(true)}
>
  {/* Wrapper Box for arranging cards with space between */}
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between', // Space between cards
      width: '90%', // Ensures the cards take full width of the container
      gap: 2, // Optional: Adds space between the cards
    }}
  >
    <div style={{display: 'flex', flexDirection: 'row'}}>
    <div className="cardF">
      <div className="cardF-inner">
        <div className="cardF-front">
          <img src={serv} alt='Daska' />
        </div>
        <div className="cardF-back">
          <p>Back Side</p>
        </div>
      </div>
    </div><div className='smanjiSlova'>
    <h3>Rucno radjene Daske</h3>
    <Divider sx={{ mt: 1,mb: 1, width: '50%',borderWidth: '1.5px' }} />
    <p>Okrugle daske</p>
    <p>Pravougaone daske</p>
    <p>Apstraktne Daske</p>
    </div>
    </div>

    <div><Divider sx={{ mt: 1,mb: 1, height: '100%',borderWidth: '1.5px' }} /></div>

    <div style={{display: 'flex', flexDirection: 'row'}}>
    <div className="cardF">
      <div className="cardF-inner">
        <div className="cardF-front">
        <img src={sat} alt='Sat' />
        </div>
        <div className="cardF-back">
          <p>Back Side</p>
        </div>
      </div>
    </div>
    <div className='smanjiSlova'>
    <h3>Rucno radjeni Satovi</h3>
    <Divider sx={{ mt: 1,mb: 1, width: '50%',borderWidth: '1.5px' }} />
    <p>Hexagoni satovi</p>
    <p>Unikatni/Apstraktni Satovi</p>
    <p>Klasicni(krug/kocka) Satovi</p>
    </div>
    </div>

  </Box>
</Box>

  );

  return (
    <>
            <Stack direction="row" spacing={2}
          sx={{
            display: { xs: 'none', sm: 'none' , md: 'block' }
          }}
          >
      <button onMouseEnter={toggleDrawer(true)}>Početna</button>
      <button onMouseEnter={toggleDrawer(true)}>Proizvodi</button>
      <button onMouseEnter={toggleDrawer(true)}>Kontakt</button>

</Stack>
      <Drawer
  anchor="top"
  open={state.top}
  onClose={toggleDrawer(true)}
  TransitionComponent={CustomDrawerTransition}
  ModalProps={{
    BackdropProps: { invisible: true } // Disable backdrop dimming
  }}
>
        {renderCards()}
      </Drawer>
    </>
  );
}
