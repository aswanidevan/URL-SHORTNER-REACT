import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const apiURL = import.meta.env.VITE_API_URL;

function RedirectPage() {
  const { shortUrl } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const response = await axios.get(`${apiURL}/api/${shortUrl}`);
        const {linkExist, originalUrl,msg } = response.data;
        if(linkExist){
        window.location.href = originalUrl;
      }
else  navigate('/', { state: { msg: msg } });
      }
      catch (error) {
        console.error('Error:', error);
        navigate('/',{state: {msg:"Unable to connect to API"}});
      }
    };

    fetchOriginalUrl();
  }, [shortUrl, navigate]);

  return <p className='fs-bolder fs-1 text-center color-header-title py-5 text-shadow-light'>Redirecting...</p>;
}

export default RedirectPage;