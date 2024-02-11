// import { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import React from "react";
import Header from './Components/Header';
import DonorName from './Components/DonorName';
import About from './Components/About';
import HealthStatus from './Components/HealthStatus';
import DonationDate from './Components/DonationDate';
import { Route, Routes } from 'react-router-dom';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <React.Fragment>
    {/* <Header/>
    <DonorName/>
    <About/>
    <HealthStatus/>
    <DonationDate/> */}
    <Header/>
    {/* <DonorName/> */}
    <Routes>

      {/* <Route path='/header' element={<Header/>} /> */}
      <Route path='/donorName' element={<DonorName/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/healthStatus' element={<HealthStatus/>}/>
      <Route path='/donationDate' element={<DonationDate/>}/>


    </Routes>
    
    </React.Fragment>
  )
}

export default App
library.add(fab, fas, far)
