import React from 'react';
import styled from 'styled-components'
import {Link} from 'gatsby'
import Logo from '../images/Innovate4WASH_Logo_web.svg'

const Header = () => {
    return ( 
        <HeaderContainer>
            <Link to='/'>
                <img src={Logo} className='logo' alt="Innovate4WASH Kisumu Logo"/>
            </Link>
            <nav>
                <ul>
                    <li id='toProgram'>
                        <Link to="/#program">Program</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
     );
}
 
export default Header;

const HeaderContainer = styled.header`
    grid-column: 2 / span 12;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav ul {
        list-style: none;
        display: flex;
        a {
            text-transform: uppercase;
            font-weight: 500;
        }
        #toProgram {
            margin-right: 1.5rem;
        }
    }
    padding: 1.5rem 0rem;
    @media screen and (max-width: 588px){
       grid-column: 2 / span 6;
       nav ul {
           flex-direction: column;
           align-items: flex-end;
           #toProgram {
               margin-right: 0;
           }
       }
    }
`