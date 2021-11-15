import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return ( 
        <FooterContainer>
            <p>Footer & Co.</p>
        </FooterContainer>
     );
}
 
export default Footer;

const FooterContainer = styled.footer`
    grid-column: 2 / span 12;
`