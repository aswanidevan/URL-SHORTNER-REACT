import { useState,useEffect  } from 'react';
import UrlList from './UrlList';
import UrlShortnerForm from './UrlShortenerForm';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const apiURL =import.meta.env.VITE_API_URL;

function UrlShortnerApp() {
  // State to manage form data
  const [formData, setFormData] = useState({
    originalUrl: '',
    urlSize: '5'
  });

  const location = useLocation();


  useEffect(() => {
    if (location.state && location.state.msg) {
      toast(location.state.msg);
      location.state.msg='';
    }

  }, [location]);
 
  const notify=   (toastMsg) => {
    toast(toastMsg);
  }

  const [urlsShortened, setUrlsShortened] = useState([]);

  // Handler function to update form data
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler function to submit form data
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send form data to the local host using Axios
      const response = await axios.post(`${apiURL}/api/shortenUrl`, formData);
      const {msg}=response.data
      notify( msg);
      setUrlsShortened([...urlsShortened, response.data]);      
    } 
    catch (error) {
      console.error('Error:', error);
      notify( "Failed to Connect to API");
      
    }
  };

  return (
    <>  
        <UrlShortnerForm   
        handleChange={handleChange}
        handleSubmit={handleSubmit} 
        />
        <UrlList list={urlsShortened} />
    </>)
    
}

export default UrlShortnerApp;