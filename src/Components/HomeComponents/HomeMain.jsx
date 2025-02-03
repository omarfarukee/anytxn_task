// eslint-disable-next-line no-unused-vars
import React from 'react'
import HomeTop from './HomeTop'
import PoweringHomeSection2 from './PoweringHomeSection2'
import OurPhilosophySection3 from './OurPhilosophySection3'
import TechnologyBuildSection4 from './TechnologyBuildSection4'
import TrustedBySection5 from './TrustedBySection5'
import LegacySection6 from './LegacySection6'
import Footer from '../../shared/Footer/Footer'
import useLoader from '../../shared/Loader/Loader'
import FinalLoader from '../../shared/Loader/FinalLoader'

export default function HomeMain() {
  const { loading, online } = useLoader();
  if (loading || !online) {
    return <FinalLoader />;
  }
  return (
   <main>

    
      <HomeTop/>
      
    <PoweringHomeSection2/>
    
    <OurPhilosophySection3/>
    
    <TechnologyBuildSection4/>
   
    <TrustedBySection5/>
   
    <LegacySection6/>
  
    <Footer/> 
  
   
   </main>
  )
}
