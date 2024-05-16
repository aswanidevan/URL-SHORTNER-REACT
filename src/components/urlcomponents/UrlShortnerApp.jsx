import { useState,useEffect  } from 'react';
import UrlList from './UrlList';
import UrlShortnerForm from './UrlShortenerForm';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UrlRetriver from './UrlRetriverForm';
import RetrivedUrl from './RetrivedUrl';


export const apiURL =import.meta.env.VITE_API_URL;

function UrlShortnerApp() {
  // State to manage form data
  const [formData, setFormData] = useState({
    originalUrl: '',
    urlSize: '5'
  });


 //Form data for retriving url stores Short Url
  const [retriveFormData, setRetriveFormData] = useState('');


//State to manage Recieved Urls Shortened url
   const [urlsShortened, setUrlsShortened] = useState([]);

//Retrived original Url
const [retrivedUrl, setRetrivedUrl] = useState([]);



  //Get Msg From Redirect Page on Failure
  const location = useLocation();
  //Toast Msg from Redirect Page on Failure
  useEffect(() => {
    if (location.state && location.state.msg) {
      toast(location.state.msg);
      location.state.msg='';
    }
  }, [location]);
 

  //Create a Toast
  const notify=   (toastMsg) => {
    toast(toastMsg);
  }

  // Handler function to update formdata
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
      const {msg,isShortened}=response.data
      notify( msg);
      if(isShortened)
      setUrlsShortened([...urlsShortened, response.data]);      
    } 
    catch (error) {
      //console.error('Error:', error);
      notify( "Failed to Connect to API");
      
    }
  };

   //Retreive the URL Handler function to update form data for Retreive the URL
  const handleChangeShortUrl = (event) => {
    const {  value } = event.target;
    setRetriveFormData( value);
  };

  //Retreive the URL on submit
  const handleSubmitRetrive = async (event) => {
    event.preventDefault();
    try {
      // Send form data to the local host using Axios
     
    const urlParts = retriveFormData.split('/');
    const lastPart = urlParts[urlParts.length - 1];
      const response = await axios.get(`${apiURL}/api/${lastPart}`); 
      const {linkExist, originalUrl,msg } = response.data;
      if(linkExist)  {window.location.href = originalUrl;   
        setRetrivedUrl(response.data);
       }          
      else    notify( msg);
    } 
    catch (error) {
     // console.error('Error:', error);
      notify("Unable to connect to API");
      
    }
  };



  return (
    <>  <UrlRetriver 
    retriveFormData={retriveFormData}
        handleChangeShortUrl={handleChangeShortUrl}
        handleSubmitRetrive={handleSubmitRetrive}
        />
        <RetrivedUrl item={retrivedUrl}/>

        <UrlShortnerForm   
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit} 
        />
        <UrlList list={urlsShortened} />
    </>)
    
}

export default UrlShortnerApp;