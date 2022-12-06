import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us </FooterLinkTitle>
                        <FooterLink to="/">Home</FooterLink>
                        <FooterLink to="/store">Store</FooterLink>
                        <FooterLink to="/servizi">Servizi</FooterLink>
                        <FooterLink to="/online">Online</FooterLink>
                        <FooterLink to="/careers">Careers</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us </FooterLinkTitle>
                        <FooterLink to="/">Home</FooterLink>
                        <FooterLink to="/store">Store</FooterLink>
                        <FooterLink to="/servizi">Servizi</FooterLink>
                        <FooterLink to="/online">Online</FooterLink>
                        <FooterLink to="/careers">Careers</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us </FooterLinkTitle>
                        <FooterLink to="/">Home</FooterLink>
                        <FooterLink to="/store">Store</FooterLink>
                        <FooterLink to="/servizi">Servizi</FooterLink>
                        <FooterLink to="/online">Online</FooterLink>
                        <FooterLink to="/careers">Careers</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us </FooterLinkTitle>
                        <FooterLink to="/">Home</FooterLink>
                        <FooterLink to="/store">Store</FooterLink>
                        <FooterLink to="/servizi">Servizi</FooterLink>
                        <FooterLink to="/online">Online</FooterLink>
                        <FooterLink to="/careers">Careers</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer