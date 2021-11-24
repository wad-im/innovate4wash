import React from 'react';
import styled from 'styled-components'
import Layout from "../components/Layout"
import SignUp from '../components/SignUpForm';

const RegistrationPage = ({location}) => {
    return ( 
        <Layout>
            <RegistrationContainer>
                <h1>Register for Innovate4WASH</h1>
                <SignUp location={location}/>
            </RegistrationContainer>
        </Layout>
     );
}
 
export default RegistrationPage;

const RegistrationContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`