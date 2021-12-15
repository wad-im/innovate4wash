import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';


const ParticipatingOrganization = () => {

    const data = useStaticQuery(graphql`
    query {
        allAirtable {edges {node {data {Organization}}}}
       }
    `)

    let participatingOrganizations = []
    data.allAirtable.edges.forEach((element)=>{
        const {Organization} = element.node.data
        if (!participatingOrganizations.includes(Organization)){
            participatingOrganizations.push(Organization)
        }
    })

    return ( 
        <Container>
            <h2>These organization already signed up</h2>
            <div className="tags">
                {
                    participatingOrganizations.map(organization => (
                        <span key={organization} className='tag'>{organization}</span>
                    ))
                }
            </div>
        </Container>
     );
}
 
export default ParticipatingOrganization;

const Container = styled.div`
    padding: 0 2rem;
    margin: 2rem 0;
    .tags {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .tag {
        display: inline-flex;
        vertical-align: top;
        -webkit-box-align: center;
        align-items: center;
        max-width: 100%;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.2;
        outline: transparent solid 2px;
        outline-offset: 2px;
        box-shadow: 
            0 .0625rem .1875rem 0rem rgba(0, 0, 0, 0.1),
            0 .0625rem .125rem -0.125rem rgba(0, 0, 0, 0.06);
        min-height: 2rem;
        min-width: 2rem;
        border-radius: 0.375rem;
        padding-inline-start: 0.75rem;
        padding-inline-end: 0.75rem;
        margin: 0.25rem 0.25rem 0.25rem 0.25rem;
        background: rgb(13,82,79);
        background: linear-gradient(45deg, rgba(13,82,79,1) 0%, rgba(19,122,117,1) 75%);
    }
    @media screen and (max-width: 588px){
        padding: 0 1rem;
    }
`