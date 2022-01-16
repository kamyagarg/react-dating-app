import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MapComp from '../Map/MapComp';

import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='landing-page flex flex-direction-column '>
      <Header />
      <MapComp />
      <Footer />
    </div>
  );
};

export default LandingPage;