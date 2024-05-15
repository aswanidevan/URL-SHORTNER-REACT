import '../styles/App.css'
import NavBar from './smallcomponents/NavBar'
import Header from './smallcomponents/Header'
import UrlShortnerApp from './urlcomponents/UrlShortnerApp'
import Footer from './smallcomponents/Footer'
import BgAnimation from './BgAnimation'

import { ToastContainer } from 'react-toastify';

function AppPage() {
 

  return (
    <>  
      <NavBar/>
      <Header/>
      <UrlShortnerApp/>
      <Footer/>
      <BgAnimation/>
      <ToastContainer />
    </>
  );
}

export default AppPage;
