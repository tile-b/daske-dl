import * as React from 'react';
import NavBar from './ui-elements/Navbar';
import '../src/css/app.css'
import FooterTile from './ui-elements/FooterTile';
import { useEffect, useState } from 'react';

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
<div style={{display:'flex',justifyContent:'center',marginTop: '200px',fontWeight: 'bold', color: 'black'}}>U IZRADNJI</div>
<div style={{display: 'flex', justifyContent: 'center',marginBottom: '100px'}}><div class="loader"></div></div>

<FooterTile />
</>
  );
}

export default App;
