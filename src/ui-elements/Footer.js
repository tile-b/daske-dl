// Footer.js
import React from 'react';
import { Box, Container} from '@mui/material';

import MailOutlineIcon from '@mui/icons-material/MailOutline';

import cut from '../images/daska.png';
import waz from '../images/wazWood2.png';
import insta from '../images/instaWood.png';
import fb from '../images/fbWood.png';
import phn from '../images/phnWood.png';
import txt from '../images/txt.png'

import IconButton from '@mui/material/IconButton';

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: 300, // Height of the footer
        display: 'flex',
        alignItems: 'flex-end', // Align content to the bottom of the container
        justifyContent: 'flex-start', // Align content to the left
        color: '#fff',
        textAlign: 'left', // Align text to the left
        paddingLeft: 2, // Padding to the left for spacing
        paddingBottom: 2,
        overflow: 'hidden',

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${cut})`,
          backgroundSize: 'contain',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          transformOrigin: 'center',
          transform: 'rotate(180deg)',
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="sm">
        {/* Add emblem image above the text */}
        {/* <img 
          src={emblem} 
          alt="Emblem" 
          style={{ width: '100px', marginBottom: '16px',paddingLeft: '-15px' }} // Adjust size and margin
        /> */}
        <div>
            <img src={txt} alt='txt' style={{width: '40vw'}}/>
            </div>
            <div>
              <p style={{color: '#673319', marginBottom: '0'}}>Backa Palanka, Srbija</p>
              <Box 
            sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#673319'
            }}
        >
            <MailOutlineIcon sx={{ marginRight: '8px' }} />
            <p style={{color: '#673319'}}>daskedl@gmail.com</p>
        </Box>
            </div>
  <Box
    sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',

    }}
  >

<IconButton onClick={() => window.open('tel:+381637856855')}>
<img src={phn} alt='inst' style={{width: '35px'}}/>
    </IconButton>

    <Box
      sx={{
        display: 'flex',
         // Space between social icons
      }}
    >
<IconButton onClick={() => window.open('https://www.instagram.com/daske_dl/', '_blank')}>
<img src={insta} alt='inst' style={{width: '35px'}}/>
    </IconButton>
    <IconButton onClick={() => window.open('https://wa.me/+381637856855', '_blank')}>
      <img src={waz} alt='wa' style={{width: '35px'}}/>
    </IconButton>
    <IconButton onClick={() => window.open('https://www.facebook.com/daske_dl/', '_blank')}>
    <img src={fb} alt='fb' style={{width: '35px'}}/>
    </IconButton>
    </Box>
  </Box>

      </Container>
    </Box>
  );
};

export default Footer;
