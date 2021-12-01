import React from 'react';
import styled from 'styled-components';
import InvitationForm from '../components/InvitationForm';
import Layout from "../components/Layout"

const InviteMePage = () => {
    return (  
        <Layout>
            <InviteMeContainer>
                <h1>Invite me page</h1>
                <InvitationForm/>
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
`