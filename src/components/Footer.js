import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return ( 
        <FooterContainer>
            <div className='copyright'> &copy;{new Date().getFullYear()} Quercus Group</div>
        </FooterContainer>
     );
}
 
export default Footer;

const FooterContainer = styled.footer`
    grid-column: 2 / span 12;
    padding: 1rem 0;
    @media screen and (max-width: 588px){
       grid-column: 2 / span 6;
    }
`