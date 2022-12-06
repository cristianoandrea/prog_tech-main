import React, {useState} from 'react'
import Navbar from './../components/Navbar';
import Sidebar from './../components/Sidebar';
import MainSection from './../components/MainSection';
import { BrowserRouter as Router} from 'react-router-dom'
import InfoSection from '../components/InfoSection';
import Services from '../components/Services'
import Footer from '../components/Footer'
import { homeObjStore,
    homeObjPresenza,
    homeObjOnline,
    homeObjCommunity,
     homeObjFive,
     homeObjSix 
    } from '../components/InfoSection/Data';


const Home = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = ()=> {
        setIsOpen(!isOpen)
    }

    return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <MainSection/>
        <InfoSection {...homeObjStore}/>
        <InfoSection {...homeObjPresenza}/>
        <InfoSection {...homeObjOnline}/>
        <InfoSection {...homeObjCommunity}/>
        <InfoSection {...homeObjFive}/>
        <InfoSection {...homeObjSix}/>
        
        <Footer />
    </>

    )
}

export default Home