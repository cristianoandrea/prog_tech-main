import React, { useState } from 'react'
import Footer from '../components/Footer'
import InfoSection from '../components/InfoSection'
import { objDogSitter, objVeterinario } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Slider from '../components/StorePage/Slider'

const PresenzaPage = () => {

  const[isOpen, setIsOpen] = useState(false)

    const toggle = ()=> {
        setIsOpen(!isOpen)
    }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <InfoSection {...objVeterinario} />
      <InfoSection {...objDogSitter} />
      <Footer />
    </div>
  )
}

export default PresenzaPage