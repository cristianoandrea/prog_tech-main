import React from 'react'
import{
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { Button1 } from '../ButtonElement'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>
            Becca ste chicche
        </ServicesH1>
        <ServicesWrapper>
            
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Cani</ServicesH2>
                <ServicesP>La migliore selezione</ServicesP>
                <Button1 to="/store/prodotti?animale=cane">Acquista Ora!</Button1>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Gatti</ServicesH2>
                <ServicesP>La migliore selezione</ServicesP>
                <Button1 to="/store/prodotti?animale=gatto">Acquista Ora!</Button1>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Altro</ServicesH2>
                <ServicesP>La migliore selezione</ServicesP>
                <Button1 to="/store/prodotti?animale=Altro" >Acquista Ora!</Button1>
            </ServicesCard>

        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services