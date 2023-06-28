import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



// Komponentlerin daxil edilmesi

import Navbar from './components/Navbar'
import Inroduction from './components/Introduction'
import AOS from 'aos';
import TrustedCompanies from './components/TrustedCompanies';
import Footer from './components/Footer';

// pages qovluqundaki sehifeler
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Services from './pages/Services';
import Blog from './pages/Blog';



function App() {

  // JSX Elementlerinin bir valideyn elementi olmalidir
  // Cunki return nin icerisinde ancaq 1 ifade ola biler
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <>
 <BrowserRouter>
 <Navbar />


 <Routes>
<Route path='/' element={<Home />}/>
<Route path="*" element={<NotFound />} />
<Route path="/Xidmetlerimiz" element={<Services />} />
<Route path="/bloglar" element={<Blog />} />
 </Routes>
 
 <Footer />

 </BrowserRouter>

 </>
 );
}

export default App;
