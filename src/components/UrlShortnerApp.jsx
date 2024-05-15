import { useState } from 'react';
import UrlList from './UrlList';
import UrlShortnerForm from './UrlShortenerForm';
import axios from 'axios';

export const apiURL =import.meta.env.VITE_API_URL;

function UrlShortnerApp() {
  // State to manage form data
  const [formData, setFormData] = useState({
    originalUrl: '',
    urlSize: '5'
  });

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
      console.log(apiURL);
      const response = await axios.post(`${apiURL}/api/shortenUrl`, formData);
      console.log(response.data); // Log the response data
      setUrlsShortened([...urlsShortened, response.data]);
      
      // Handle the response as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
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