
import React, { useEffect } from 'react';
import styles from './style';
import { Crisp } from "crisp-sdk-web";
import { logo } from './assets';


import { Navbar, Hero, Business, Billing, CardDeal, CTA, Footer } from './components'
import Maintain from './pages/Maintain';
import Alert from './components/Alert';







const App = () => {

  useEffect(() => {

    Crisp.configure("7a50efcc-caa5-429e-afc5-4fcc689a2cd2");
  }, []);
  return (

    <div className="bg-primary w-full overflow-hidden">
      {/* <Maintain />
      <Footer /> */}
     
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
{/*         <Alert />  this line is for showing the alert during the maintaince of the website */}
          <Navbar />

        </div>
      </div>


      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* remove stats */}
          <Business />
          <Billing />
          <CardDeal />

          <CTA />
          <Footer /> 


        </div>
      </div>

    </div>

  )
}

export default App
