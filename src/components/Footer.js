import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return ( 
        <FooterContainer>
            <div className="disclaimer">
                <p>Innovate4WASH is an initiative by <a href="https://quercus-group.com">Quercus Group</a>.</p>
                <div className='copyright'> &copy;{new Date().getFullYear()} Quercus Group</div>
            </div>
            <div className="legal">
                <Link to='/terms-and-conditions' className="link">Terms and Conditions</Link>
                <Link to='/privacy-policy' className="link">Privacy Policy</Link>
            </div>
        </FooterContainer>
     );
}
 
export default Footer;

const FooterContainer = styled.footer`
    grid-column: 2 / span 12;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: #dedede;
    a {
        text-decoration: underline;
        color: #dedede;
    }
   .link {
       margin: 0 0.5rem;
   }
    @media screen and (max-width: 588px){
       grid-column: 2 / span 6;
    }
`