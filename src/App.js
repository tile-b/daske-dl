import * as React from 'react';
import { useEffect, useState } from 'react';

import NavBar from './ui-elements/Navbar';
import FooterTile from './ui-elements/FooterTile';
import Footer from './ui-elements/Footer';

import '../src/css/app.css'


function App() {


const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleResize = () => {
  setIsMobile(window.innerWidth <= 1000);
  };

handleResize();
window.addEventListener('resize', handleResize);
return () => {
  window.removeEventListener('resize', handleResize);
};
},[]
);

  return (

<>
<NavBar isMobile={isMobile} />
<div style={{display:'flex',justifyContent:'center',marginTop: '200px',fontWeight: 'bold', color: 'black',paddingBottom: '400px'}}>( https://mega.nz/file/CQBwHByQ#KXqrB2BzOGWYzN9X04yPKrTIY4HPGyR47hMpQpeOdnM)</div>
<div style={{display: 'flex', justifyContent: 'center',marginBottom: '100px'}}><div class="loader"></div></div>


<Footer />
<FooterTile />
</>
  );
}

export default App;
