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
                <p>We publish the first day's program here shortly before Innovate4WASH.</p>
                <div className="hr" aria-hidden="true"></div>
                <ol className="program-items">
                  {
                    sessionsOnDay1.map(({node}) => (
                      <SessionCard key={node.id} sessionDetails={node}/>
                    ))
                  }
                <div className="overlay">
                  Coming soon
                </div>
                </ol>
            </div>
            <div className=" day day-2">
                <h2>Day 2</h2>
                <span className="date">28 January 2022</span>
                <p>We publish the second day's program here shortly before Innovate4WASH.</p>
                <div className="hr" aria-hidden="true"></div>
                <ol className="program-items">
                  {
                    sessionsOnDay2.map(({node}) => (
                      <SessionCard key={node.id} sessionDetails={node}/>
                    ))
                  }
                <div className="overlay">
                  Coming soon
                </div>
                </ol>
            
            </div>
            
        </ProgramContainer>
     );
}
 
export default Program;

const ProgramContainer = styled.section`
    margin-top: 3.052rem;
    
    .day {
      overflow: hidden;
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
    .program-items {
      position: relative;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.441rem;
      line-height: 1.3;
      font-weight: 700;
      text-align: center;
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
        .overlay {
          background: linear-gradient(45deg, rgba(0,96,92,0.9) 0%, rgba(0,112,108,0.9) 75%);
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
        .overlay {
          background: linear-gradient(45deg, rgba(3,119,119,0.9) 0%, rgba(4,133,133,0.9) 75%);
        }
    }
    .date {
        display: inline-block;
        font-size: 1.25rem;
        line-height: 1.5;
        font-weight: 700;
    }
`