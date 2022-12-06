import React , {useState} from 'react'
import {Button} from '../ButtonElement'
import {
    HeroContainer,
    HeroBG,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
    } from './MainElements'

const MainSection = () => {
    const[hover,setHover] = useState(false)

    const onHover= () =>{
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroContent>
            <HeroH1>
            Da un po' di tempo <br/>
Spesso mi viene in mente <br/>
Quella poesia di Dante <br/>
Quella dove lui diceva:
            </HeroH1>
            <HeroP>
            "Quanto mi piacerebbe <br/>
Che il tempo si fermasse<br/>
Mentre io me ne sto su una barca<br/>
Con un paio di amici miei e qualche amichetta<br/>
A parlare d'amore e a cazzeggiare"<br/>

            </HeroP>
            <HeroBtnWrapper>
                <Button to='signup'
                onMouseEnter={onHover}
                onMouseLeave={onHover} 
                primary="true"
                dark="true">
                    Tipo i video dei rappers americani {hover ? <ArrowForward/> : <ArrowRight/>}

                </Button>
            </HeroBtnWrapper>
        </HeroContent>

        

    </HeroContainer>
  )
}

export default MainSection