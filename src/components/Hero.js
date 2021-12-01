import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import BlobImage from './BlobImage';

const HeroSection = () => {
    return ( 
        <HeroContainer>
            <div className="hero-text">
                <h1>
                    <span>The next solution</span> for water is here. 
                </h1>
                <span className='subtitle'>
                    January 27 - 28, 2022 • Ciala Resort Kisumu 
                </span>
                <p className='details'>
                Innovate4WASH is a two-day marketplace platform designed to connect <strong>ideas, talent and capital</strong>, from and outside of Kenya, to scale-up existing commercial solutions to problems and opportunities in the water and sanitation sector.
                </p>
                <div className="button-group">
                    <Button to='/invite-me' className='reg-button'>
                        Invite me! I'd love to participate
                    </Button>
                    <a className='sponsor-button' href='/'>
                        I am interested to become a sponsor
                    </a>
                </div>
            </div>
            <BlobImage className='hero-image'/>
        </HeroContainer>
     );
}
 
export default HeroSection;

const HeroContainer = styled.section`
    height: 50vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    h1 {
        margin-bottom: 1rem;
    }
    .hero-text {
        grid-column: 1 / span 1;
        align-self: center;
        span {
            color: #8BEDE8;
        }
    }
    .subtitle {
        display: inline-block;
        font-size: 1.25rem;
        line-height: 1.5;
        font-weight: 700;
        margin-bottom: 2rem;
    }
    .details {
        margin-bottom: 2rem;
    }
    .button-group {
        display: flex;
        align-items: center;
        .sponsor-button {
            margin-left: 1rem;
            text-decoration: underline;
            cursor: pointer;
        }
    }
    .hero-image {
        transform: scale(0.8);
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% 
    }
`