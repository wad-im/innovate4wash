
import React from 'react';
import styled from 'styled-components';
import InvitationForm from '../components/InvitationForm';
import Layout from "../components/Layout"
import ParticipatingOrganization from '../components/ParticipatingOrganizations';

const InviteMePage = () => {
    return (  
        <Layout pageTitle='Invite me!'>
            <InviteMeContainer>
                <div className='invitation-details'>
                    <h1 className="title">Get <span>your spot</span> on the invitation list!</h1>
                    <p>Innovate4WASH is curated and by invitation only, because two aspect are important for accelerating great solutions for WASH.</p>
                    <div className="boxes">
                        <div className="box">
                            <h2>The right people at the right time </h2>
                            <p>People often join a community because they resonate with its vision. But they will stay (or not) because of its people.</p>
                        </div>
                        <div className="box">
                            <h2>Diversity of a multi-stakeholder event</h2>
                            <p>A diversity of perspectives increases the chance to make unexpected connections and unexpected discoveries - both essential to innovation.</p>
                        </div>
                    </div>

                    <h2>Here is your journey to Innovate4WASH</h2>
                    <div className="steps">
                        <div className="step">
                            <h3>Step 1 | Sign up. </h3>
                            <p>Let us know that you are interested to participate and sign up using the form on this page.</p>
                        </div>
                        <div className="step">
                            <h3>Step 2 | Share your aspirations with us. </h3>
                            <p>You will get an email from us inviting you to share a little bit about you and your aspirations.</p>
                        </div>
                        <div className="step">
                            <h3>Step 3 | Review</h3>
                            <p>Upon successful review, we will provide you with a final registration and payment link for Innovate4WASH. </p>
                        </div>
                        <div className="step">
                            <h3>Step 4 | Come, pitch and connect.</h3>
                            <p>We are excited to have you at Innovate4WASH 2022 in Kisumu.</p>
                        </div>
                    </div>
                    
                    <h2>The two day pass for Innovate4WASH 2022</h2>
                    <div className="features">
                        <div className="box">
                            <h3>Price</h3>
                            <p>35.000 KES</p>
                        </div>
                        <div className="box">
                            <h3>Features</h3>
                            <p>
                                Get full access to all sessions<br/>
                                Be visible to entire community<br/>
                                Networking opportunities<br/>
                                Insight into 80+ solutions and initiatives in the space<br/>
                                Food & Drinks
                            </p>
                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <InvitationForm/>
                    <ParticipatingOrganization/>
                </div>
            </InviteMeContainer>
        </Layout>
    );
}
 
export default InviteMePage;

const InviteMeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;

    .title {
        margin-bottom: 1rem;
        span {
            color: #8BEDE8;
        }
    }

    .boxes, .features, .steps {
        margin: 2rem 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        .box {
            background: rgb(13,82,79);
            background: linear-gradient(45deg, rgba(13,82,79,1) 0%, rgba(19,122,117,1) 75%);
            padding: 1.5rem;
            border-radius: 1rem;
            height: fit-content;
            h2, h3 {
                font-size: 1.25rem;
                margin-top:0;
            }
        }
        .step {
            margin-bottom: 1rem;
        }
        .step h3 {
            font-size: 1rem;
        }
        
    }
    h2 {
        font-size: 1.563rem;
        line-height: 1.4;
        font-weight: 700;
        margin: 2rem 0 1.5rem 0;
    }
    h3 {
        font-size: 1.25rem;
        line-height: 1.5;
        font-weight: 700;
    }
    p {
        color: #dedede;
    }
    @media screen and (max-width: 994px){
        .invitation-details {
            grid-column: 1 / span 2;
        }
        .right-column {
            grid-column: 1 / span 2;
        }
    }
    @media screen and (max-width: 588px){
        .boxes, .features, .steps {
            grid-template-columns: 1fr;
            grid-column-gap: 0rem;
        }
        .box {
            margin-bottom: 1rem;
        }
        .features {
            margin-bottom: 0rem;
        }
    }
`