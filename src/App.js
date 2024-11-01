import * as React from 'react';
import NavBar from './ui-elements/Navbar';
import '../src/css/app.css'

function App() {
  return (

<>
<NavBar />
<div style={{display:'flex',justifyContent:'center',marginTop: '100px',fontWeight: 'bold', color: 'black'}}>U IZRADNJI</div>
<div style={{display: 'flex', justifyContent: 'center'}}><div class="loader"></div></div>


</>
  );
}

export default App;
