import React from 'react';
import styled from 'styled-components'
import Layout from "../components/Layout"

const AboutPage = () => {

    const topics = ['Financing and investing in opportunities in the WASH sector', 'Enabling innovations in WASH', 'Innovations for operators and utilities','Safe and Clean Water', 'Energy Efficiency', 'Off-grid and smart technologies', 'Wastewater Treatment Technologies', 'Public-Private Partnerships']

    return ( 
        <Layout pageTitle='About'>
            <AboutPageContainer>
                <section className="intro">
                    <h1>Designed to <span>close the gap</span>.</h1>
                    <p>Capital seeking great commercial solutions often exists. The need for innovative approaches is increasing.</p>
                    <p>Yet, there is a gap between ideas, talent and capital.</p>
                    <p>Innovate4WASH is a two-day marketplace platform designed to close this gap. It connects ideas, talent and capital, from and outside of Kenya, to scale-up existing commercial solutions to problems and opportunities in the water and sanitation sector.</p>
                </section>
                <section className="who-participates">
                    <h2>// Participants</h2>
                    <div className="participant-group">
                        <h3>Commercial solution providers</h3>
                        <p>.e.g. start-ups, entrepreneurs and corporates, who benefit from connecting to investors, potential partners and those who support innovation for water and sanitation</p>
                    </div>
                    <div className="participant-group">
                        <h3>Capital and finance stakeholders</h3>
                        <p> e.g. impact investors, banks, international and national donor and grant organizations, and foundations, who scout for investment opportunities, partners or display their innovation agenda towards the ecosystem;</p>
                    </div>
                    <div className="participant-group">
                        <h3>Enablers</h3>
                        <p>such as potential clients, e.g. Kenya's utility operators or other public agencies, or ecosystem stakeholders, who support emerging innovation in WASH.</p>
                    </div>
                </section>
                <section className="topics">
                    <h2>// Topics</h2>
                    <p>In past events in <strong>Nairobi (2018) </strong> and <strong>Kisumu (2019)</strong> , entrepreneurs, innovators, investors and other stakeholders pitched and sought support for solutions & initiatives in themes, among others, such as</p>
                    <div className="topics-labels">
                        {
                            topics.map((topic) => (
                                <span key={topic} className="topic-label">
                                    {topic}
                                </span>
                            ))
                        }
                    </div>
                </section>

                <section className="event-elements">
                    <h2>// Elements</h2>
                    <div className="element">
                        <h3>The forum</h3>
                        <p> is the main plenary and space for the pitching sessions. No long panel debates, no long discussion, but all focus on action and solutions to problems in the sector.</p>
                    </div>
                    <div className="element">
                        <h3>The market</h3>
                        <p>is an excellent space for networking and exhibiting solutions beyond the forum.</p>
                    </div>
                    <div className="element">
                        <h3>The hallway</h3>
                        <p>is more an effort than a space, to create an experience that allows for unexpected connections and impact partnerships to occur.</p>
                    </div>
                </section>
                <section className="sponsorship" id='sponsorship'>
                    <div className="sponsor-intro">
                        <h2>Interested to <span>sponsor or partnering</span>  with Innovate4WASH?</h2>
                        <p>Innovate4WASH can only be for the dedicated support of organizations and companies who share our conviction for collaborative action and the importance of the private sector in order to advance on the sustainable development goal 6 and make real progress on water and sanitation problems.</p>
                    </div>
                    <div className="sponsor-benefits">
                        <h3>What is in it for you?</h3>
                        <p>Sponsorship includes a range of standard features. We promise to highlight your engagement and support, e.g. by including you in our communication kit and outreach across channels, or by an increased stage time, and allocate space. But these are just the basics...</p>
                        <h3>Customized sponsorship</h3>
                        <p>Interested to co-create Innovate4WASH, e.g., through a sponsor’s special session or dedicated thematic block? Perhaps you are interested to reach all participants via the email list? Whatever your aspirations, we are glad to customize the sponsorship with you.</p>
                    </div>
                    <div className="sponsor-contacts">
                        <h3>Reach out to...</h3>
                        <div className="contact">
                            <h4>Mariam Njoroge</h4>
                            <p>mariam@quercus-group.com</p>
                        </div>
                        <div className="contact">
                            <h4>Wadim Baslow</h4>
                            <p>wadim@quercus-group.com</p>
                        </div>
                    </div>
                </section>
            </AboutPageContainer>
        </Layout>
     );
}
 
export default AboutPage;

const AboutPageContainer = styled.div`
    section {
        margin-bottom: 3.052rem;
        padding: 0 2rem;
    }
    h3 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }
    .intro {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 2rem;
        h1 {
            grid-column: 1 / span 2;
            margin-bottom: 1rem;
            span {
            color: #8BEDE8;
            }
        }
        p {
            grid-column: 2 / span 2;
            margin-bottom: 1rem;
        }
    }
    .who-participates {
        border-radius: 1rem;
        padding: 2rem;
        box-shadow: 
        0 .625rem .9375rem -0.1875rem rgba(0, 0, 0, 0.1),
        0 .25rem .375rem -0.125rem rgba(0, 0, 0, 0.05);
        background: rgb(0,96,92);
        background: linear-gradient(45deg, rgba(0,96,92,1) 0%, rgba(0,112,108,1) 75%);
        color: #4DEBEB;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 2rem;
        h2 {
            grid-column: 1 / span 3;
            margin-bottom: 2rem;
        }
    }
    .topics {
        h2 {
            margin-bottom: 2rem;
        }
        .topics-labels {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 2rem;
            .topic-label {
                background: rgb(13,82,79);
                background: linear-gradient(45deg, rgba(13,82,79,1) 0%, rgba(19,122,117,1) 75%);
                /* border-radius: 0.5rem; */
                margin: 0.5rem;
                box-shadow: 
                    0 0.625rem 0.9375rem -0.1875rem rgba(0, 0, 0, 0.1),
                    0 .25rem .375rem -0.125rem rgba(0, 0, 0, 0.05);
                    display: inline-flex;
                vertical-align: top;
                -webkit-box-align: center;
                align-items: center;
                max-width: 100%;
                font-weight: 400;
                line-height: 1.2;
                outline: transparent solid 2px;
                outline-offset: 2px;
                min-height: 1.5rem;
                min-width: 1.5rem;
                border-radius: 0.375rem;
                padding-inline-start: 0.5rem;
                padding-inline-end: 0.5rem;
            }
        }
    }
    .event-elements {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 2rem;
        h2 {
            grid-column: 1 / span 3;
            margin-bottom: 2rem;
        }
        h3 {
            margin-top: 1rem;
        }
    }
    .sponsorship {
        border-radius: 1rem;
        padding: 2rem;
        margin-bottom: 2rem;
        box-shadow: 
        0 .625rem .9375rem -0.1875rem rgba(0, 0, 0, 0.1),
        0 .25rem .375rem -0.125rem rgba(0, 0, 0, 0.05);
        background: rgb(3,119,119);
        background: linear-gradient(45deg, rgba(3,119,119,1) 0%, rgba(4,133,133,1) 75%);
        color: #06EFEF;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        .sponsor-intro {
            grid-column: 1 / span 2;
            h2, p {
                margin-bottom: 1rem;
            }
            span {
                color: #fff;
                display: inline-block;
            }
        }
        .sponsor-benefits {
            p {
                margin-bottom: 1rem;
            }
        }
        .sponsor-contacts {
            h4 {
                margin: 0;
                font-size: 1rem;
            }
            .contact {
                margin-bottom: 1rem;
            }
        }
    }
    @media screen and (max-width: 588px){
        section {
            padding: 1rem;
            margin-bottom: 2rem;
        }
        .intro h1, .intro p, .participant-group {
            grid-column: 1 / span 3;
        }
        .who-participates h3 {
            margin: 1rem 0 0.5rem 0;
        }
        .event-elements .element {
            grid-column: 1 / span 3;
            h3 {
                margin: 1rem 0 0.5rem 0;
            }
        }
        .sponsor-benefits, .sponsor-contacts {
            grid-column: 1 / span 2;
        }
        .sponsorship h2 {
            font-size: 1.953rem;
        }
    }
` 