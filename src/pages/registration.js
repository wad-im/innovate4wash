import React from 'react';
import styled from 'styled-components'
import Layout from "../components/Layout"
import SignUp from '../components/SignUpForm';
import Ticket from '../components/Ticket';


const RegistrationPage = ({location}) => {

    return ( 
        <Layout>
            <RegistrationContainer>
                <div className="title">
                    <h1>Secure <span>your spot</span> today!</h1>
                    <span className="subtitle">87 innovators, investors and enablers already confirmed their participation.</span>
                </div>
                <div className="ticket-info">
                    <Ticket/>
                    <div className="features">
                        <div className="feature">
                            <h5>Full Access</h5>
                            <p>All pitching, networking and sponsors’ special sessions are open to you. Interested in the technical tour? Join!</p>
                        </div>
                        <div className="feature">
                            <h5>Visibility</h5>
                            <p>The stage is yours. We guarentee your opportunity to address the entire Innovate4WASH audience.</p>
                        </div>
                        <div className="feature">
                            <h5>Networking</h5>
                            <p>Looking for a client, investor or partner? They are here, and nothing will hold you back to make the connection.</p>
                        </div>
                        <div className="feature">
                            <h5>Knowledge</h5>
                            <p>You will see more than 80 pitches over two days. All presentation will be available to you after the event.</p>
                        </div>
                        <div className="feature">
                            <h5>Food</h5>
                            <p>Snacks, lunch and drinks are included.</p>
                        </div>
                    </div>
                </div>
                <SignUp location={location}/>
            </RegistrationContainer>
        </Layout>
     );
}
 
export default RegistrationPage;

const RegistrationContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    
    .title {
        grid-column: 1 / span 2;
        h1 span {
            color: #8BEDE8;
        }
    }

    .subtitle {
        display: inline-block;
        font-size: 1.25rem;
        line-height: 1.5;
        font-weight: 700;
        color: #33DFD6;
    }

    .features {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        padding: 1rem;
        margin-top: 1rem;
        p {
            color: #dedede;
        }
    }
`