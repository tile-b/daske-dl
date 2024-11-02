import * as React from 'react';
import NavBar from './ui-elements/Navbar';
import '../src/css/app.css'
import FooterTile from './ui-elements/FooterTile';

function App() {
  return (

<>
<NavBar />
<div style={{display:'flex',justifyContent:'center',marginTop: '100px',fontWeight: 'bold', color: 'black'}}>U IZRADNJI</div>
<div style={{display: 'flex', justifyContent: 'center'}}><div class="loader"></div></div>

<FooterTile />
</>
  );
}

export default App;
