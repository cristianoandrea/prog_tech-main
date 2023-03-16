import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkItems>
                        <FooterLink to="/" description="Qua puoi trovare tutti i nostri servizi" >Home</FooterLink>
                        <FooterLink to="/store" description="Giocattoli, accessori, sanitari e tanti altri prodotti">Store</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to="/presenza" description="Toelettatura, dogsitting, Veterinario, Psicologo">Servizi</FooterLink>
                        <FooterLink to="/community" description="Interagisci e conosci gli altri amanti di animali">Comunità</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to="http://localhost:4200/" description="Divertiti con i nostri minigiochi sui tuoi animali preferiti">Game</FooterLink>
                    </FooterLinkItems>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;