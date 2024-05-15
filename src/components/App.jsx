// import { useState } from 'react'
  import AppPage from './AppPage'
  import React from 'react';
  import { BrowserRouter, Route, Routes,Outlet } from 'react-router-dom';
  import RedirectPage from './RedirectPage';
  import About from './About';


  function App() {
  

    return (
      <>  
          <BrowserRouter>
        <Routes>
          <Route  path="/" element={<AppPage/>} />
          <Route path="/about" element={<About />} />
          <Route path="/:shortUrl" element={<RedirectPage />} />
        </Routes>
      </BrowserRouter>
      
      </>
    );
  }

  export default App
