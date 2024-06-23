import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Featured from '../Featured/Featured'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'
import { HeroData } from '../HeroSection/HeroData'
import Header from '../Header/Header'
import {motion} from '../../../node_modules/framer-motion/dist/framer-motion'

const Home = () => {
  return (
    <>
      <motion.div 
        initial= {{width: 0}}
        animate= {{width: "100%"}}
        exit= {{x: window.innerWidth, transition: {duration: 0.4}}}
      >
        <Header />
        <HeroSection 
          slides= {HeroData}
        />
        <Featured />
        <Services />
        <Footer />

      </motion.div>
    </>
  )
}

export default Home