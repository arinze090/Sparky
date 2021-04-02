import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import {FooterContainer, FooterLink, FooterLinkItems, FooterLinkTitle, FooterLinksContainer, FooterLinksWrapper, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights} from './FooterElements'

function Footer() {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Destination</FooterLink>
                                <FooterLink to="/">Sponsorship</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/">How it works</FooterLink>
                                <FooterLink to="/">Testimonials</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                                <FooterLink to="/">Github</FooterLink>
                                <FooterLink to="/">LinkedIn</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'onClick={toggleHome}>Ego Oyibo</SocialLogo>
                        <WebsiteRights>arinze © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/arinze__n" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/arinze090" target="_blank" aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/arinze-nchor-nwankwo-778888130" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;