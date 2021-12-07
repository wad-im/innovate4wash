import React from 'react'
import styled from 'styled-components';
import Logo from '../images/Innovate4WASH_Logo_web.svg'

const Ticket = ({fullName}) => {
    return ( 
        <TicketContainer>
            <img src={Logo} className='logo' alt="Innovate4WASH Kisumu Logo"/>
            <div className="main-info">
                <h2>2 day pass</h2>
                <span>Thu 27.01 - Fri 28.01.2022 • Ciala Resort Kisumu</span>
            </div>
            <div className="extra-info">
                <p>Price 35.000 KES</p>
                <p>Full Access</p>
                {fullName && <p>{fullName}</p>}
            </div>
        </TicketContainer>
     );
}
 
export default Ticket;

const TicketContainer = styled.div`
    background: rgb(13,82,79);
    background: linear-gradient(45deg, rgba(13,82,79,1) 0%, rgba(19,122,117,1) 75%);
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height:356px;
    box-shadow: 
        0 0.625rem 0.9375rem -0.1875rem rgba(0, 0, 0, 0.1),
        0 .25rem .375rem -0.125rem rgba(0, 0, 0, 0.05);
    img {
        max-height: 75px;
        width: fit-content;
    }
    h2 {
        color: #33DFD6;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 3.052rem;
        line-height: 1.1;
    }
    span {
        color: #33DFD6;
        display: inline-block;
        font-size: 1.25rem;
        line-height: 1.5;
        font-weight: 700;
    }
    .extra-info {
        align-self: flex-end;
        text-align: right;
    }
    @media screen and (max-width: 588px){
        grid-row-gap: 1rem;
        img {
            max-height: 48px;
        }
        h2 {
            font-size: 1.953rem;
        }
        span {
            font-size: 1rem;
        }
    }
    @media screen and (max-width: 398px){
        grid-row-gap: 0.5rem;
        padding: 1.5rem;
    }
`