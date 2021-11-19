import React from 'react';
import styled from 'styled-components'
import Layout from "../components/Layout"
import SignUp from '../components/SignUpForm';

const RegistrationPage = () => {
    return ( 
        <Layout>
            <h1>Register for Innovate4WASH</h1>
            <SignUp/>
        </Layout>
     );
}
 
export default RegistrationPage;