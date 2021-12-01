import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby'
import SessionCard from './SessionCard';

const Program = () => {

    const data = useStaticQuery(graphql`
    query sessions {
        allContentfulSession {
          edges {
            node {
              id
              title
              day
              description
              pitchespresentations {
                id
                title
                description
                speaker {
                  id
                  fullName
                  organization
                }
              }
            }
          }
        }
      }
    `)

    const sessionsOnDay1 = data.allContentfulSession.edges.filter(session => session.node.day === "1")
    const sessionsOnDay2 = data.allContentfulSession.edges.filter(session => session.node.day === "2")

    return ( 
        <ProgramContainer>
            <div className=" day day-1">
                <h2>Day 1</h2>
                <span className="date">27 January 2022</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales duis amet dignissim eget. A vestibulum eu non dapibus sed montes, massa posuere diam. Velit facilisis egestas viverra ullamcorper.</p>
                <div className="hr" aria-hidden="true"></div>

                {
                  sessionsOnDay1.map(({node}) => (
                    <SessionCard key={node.id} sessionDetails={node}/>
                  ))
                }

            </div>
            <div className=" day day-2">
                <h2>Day 2</h2>
                <span className="date">28 January 2022</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales duis amet dignissim eget. A vestibulum eu non dapibus sed montes, massa posuere diam. Velit facilisis egestas viverra ullamcorper.</p>
                <div className="hr" aria-hidden="true"></div>

                {
                  sessionsOnDay2.map(({node}) => (
                    <SessionCard key={node.id} sessionDetails={node}/>
                  ))
                }

            </div>
        </ProgramContainer>
     );
}
 
export default Program;

const ProgramContainer = styled.section`
    margin-top: 3.052rem;
    .day {
        border-radius: 1rem;
        padding: 2rem;
        margin-bottom: 2rem;
        box-shadow: 
        0 .625rem .9375rem -0.1875rem rgba(0, 0, 0, 0.1),
        0 .25rem .375rem -0.125rem rgba(0, 0, 0, 0.05);
        h2, p, .date {
            margin-bottom: 16px;
        }
    }
    .day-1 {
      background: rgb(0,96,92);
      background: linear-gradient(45deg, rgba(0,96,92,1) 0%, rgba(0,112,108,1) 75%);
        color: #4DEBEB;
        .hr {
          background-color: #4DEBEB;
          height: 0.05rem;
          margin-top: 2rem;
        }
    }
    .day-2 {
      background: rgb(3,119,119);
      background: linear-gradient(45deg, rgba(3,119,119,1) 0%, rgba(4,133,133,1) 75%);
        color: #06EFEF;
        .hr {
          background-color: #06EFEF;
          height: 0.05rem;
          margin-top: 2rem;
        }
    }
    .date {
        display: inline-block;
        font-size: 1.25rem;
        line-height: 1.5;
        font-weight: 700;
    }
`