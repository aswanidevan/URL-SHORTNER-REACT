import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { dotWave } from 'ldrs'


//get ENV VARIABLE
const apiURL = import.meta.env.VITE_API_URL||"https://bite-urls-api.onrender.com";

function RedirectPage() {
  //get params for redirect
  const { shortUrl } = useParams();
  const navigate = useNavigate();
  dotWave.register()

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const response = await axios.get(`${apiURL}/api/${shortUrl}`);  //Fetch original URL from API
        const {linkExist, originalUrl,msg } = response.data;
        if(linkExist)  window.location.href = originalUrl;            //Redirect to original URL
        else  navigate('/', { state: { msg: msg } });                 //Go to Home with msg
      }
      catch (error) {
     //   console.error('Error:', error);
        navigate('/',{state: {msg:"Unable to connect to API"}});      //Failed to fetch URL Go to Home with msg
      }
    };

    fetchOriginalUrl();
  }, [shortUrl]);

  return (<>
  

  <p className='fs-bolder fs-1 text-center color-header-title py-5 text-shadow-light'>Redirecting<l-dot-wave
  size="45"
  speed="0.9" 
  color="#38cf99" 
></l-dot-wave></p></>); 
}

export default RedirectPage;