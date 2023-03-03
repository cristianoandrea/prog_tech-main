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
            <HeroP>
            Benvenuti su Animal House, il luogo ideale per prendersi cura dei vostri animali domestici. Siamo un'azienda con sedi in tutta Italia, specializzata nei servizi di veterinario, dogsitting e nella vendita di prodotti per animali.

Presso le nostre cliniche veterinarie, il nostro team di esperti veterinari si prenderà cura della salute e del benessere dei vostri animali domestici, offrendo servizi di cura generale, vaccinazioni, analisi del sangue, interventi chirurgici e molto altro ancora.

Se state cercando un servizio di dogsitting affidabile, il nostro team di dogsitter altamente qualificati si prenderà cura dei vostri amati animali domestici mentre voi siete impegnati al lavoro o in viaggio.

Inoltre, la nostra vasta gamma di prodotti per animali comprende tutto ciò di cui avete bisogno per garantire il comfort e la felicità dei vostri amici pelosi. Dalle crocchette ai giochi interattivi, abbiamo tutto ciò che serve per soddisfare le esigenze dei vostri animali domestici.

Siamo fieri di offrire un servizio clienti di prima classe e siamo sempre disponibili ad aiutare i nostri clienti a scegliere i servizi e i prodotti giusti per i loro animali domestici. Grazie per aver scelto Animal House come partner nella cura dei vostri amati animali domestici.

            </HeroP>
           
        </HeroContent>

        

    </HeroContainer>
  )
}

export default MainSection