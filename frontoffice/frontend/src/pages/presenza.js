import React from 'react'
import Footer from '../components/Footer'
import InfoSection from '../components/InfoSection'
import { objDogSitter, objVeterinario } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Slider from '../components/StorePage/Slider'

const PresenzaPage = () => {
  return (
    <div>
      <Navbar />
      <InfoSection {...objVeterinario} />
      <InfoSection {...objDogSitter} />
      <Footer />
    </div>
  )
}

export default PresenzaPage