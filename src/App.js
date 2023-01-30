import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// Komponentlerin daxil edilmesi

import Navbar from './components/Navbar'

function App() {

  // JSX Elementlerinin bir valideyn elementi olmalidir
  // Cunki return nin icerisinde ancaq 1 ifade ola biler
  
  return (
    <>
 
 <Navbar />
 </>
 );
}

export default App;
