import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import {StaticImage} from 'gatsby-plugin-image'

const HeroSection = () => {
    return ( 
        <HeroContainer>
            <div className="hero-text">
                <h1>
                    <span>The next solution</span> for water is here. 
                </h1>
                <span className='subtitle'>
                    January 27 -28, 2022 • Acacia Premier Hotel Kisumu 
                </span>
                <p className='details'>
                    Innovate4Water is a 2-day marketplace event to build bridges between the private sector and all the other key stakeholders leveraging water-related sector opportunities.
                </p>
                <div className="button-group">
                    <Button to='/registration' classname='reg-button'>
                        Secure your seat
                    </Button>
                    <a className='sponsor-button'>
                        I am interested to become a sponsor
                    </a>
                </div>
            </div>
            <StaticImage src='../images/heroImage.jpg' alt='hero image' className='hero-image'/>
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