import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const CovidNotice = () => {
    return ( 
        <CovidNoticeContainer>
            <h2>Covid-19</h2>
            <p>Let us stay safe together. Check our actions to contribute to it in the <Link to='/logistics'>Innovate4WASH logistics info.</Link></p>
        </CovidNoticeContainer>
     );
}
 
export default CovidNotice;

const CovidNoticeContainer = styled.div`
    display: flex;  
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 1rem;
    padding: 1rem 2rem;
    margin-bottom: 2rem;
    border: #06EFEF solid 0.1rem;
    color: #06EFEF;
    a {
        color: #06EFEF;
        text-decoration: underline;
    }
    @media screen and (max-width: 994px){
        flex-direction: column;
        align-items: flex-start;
    }
`