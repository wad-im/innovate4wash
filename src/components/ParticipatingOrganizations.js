import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';


const ParticipatingOrganization = () => {

    const data = useStaticQuery(graphql`
    query {
        allAirtable(filter: { table: { eq: "Registrations" } }) {
          edges {
            node {
              data {
                Organization
                Website
                Record_Id
                Complete_Registration
              }
            }
          }
        }
      }
    `)
    console.log(data)
    let participatingOrganizations = []
    data.allAirtable.edges.forEach((element)=>{
        const {Organization, Website, Record_Id, Complete_Registration} = element.node.data
        
        let isIncludedInList = participatingOrganizations.some( organization => Complete_Registration && organization['Organization'] === Organization )
        if (!isIncludedInList) {
            participatingOrganizations.push({Organization, Website, Record_Id})
        }
    })
    

    return ( 
        <Container>
            <h2>These organizations are here</h2>
            <div className="tags">
                {
                    participatingOrganizations.map(organization => (
                        <span key={organization.Record_Id} className='tag'>
                            { organization.Website ? <a href={organization.Website}>{organization.Organization}</a> : organization.Organization}
                        </span>
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
        margin-top: 1rem;
    }
    .tag {
        display: inline-flex;
        vertical-align: top;
        -webkit-box-align: center;
        align-items: center;
        max-width: 100%;
        font-weight: 400;
        font-size: 0.8rem;
        line-height: 1.2;
        outline: transparent solid 2px;
        outline-offset: 2px;
        box-shadow: 
            0 .0625rem .1875rem 0rem rgba(0, 0, 0, 0.1),
            0 .0625rem .125rem -0.125rem rgba(0, 0, 0, 0.06);
        min-height: 2rem;
        min-width: 2rem;
        border-radius: 0.375rem;
        padding-inline-start: 0.5rem;
        padding-inline-end: 0.5rem;
        margin: 0.25rem 0.25rem 0.25rem 0.25rem;
        background: rgb(13,82,79);
        background: linear-gradient(45deg, rgba(13,82,79,1) 0%, rgba(19,122,117,1) 75%);
    }
    @media screen and (max-width: 588px){
        padding: 0 1rem;
        display: none;
    }
`