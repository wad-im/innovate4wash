import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby'
import SessionCard from './SessionCard';

const Program = () => {

    const data = useStaticQuery(graphql`
      query {
        allAirtable 
          (filter: {
            table: {eq: "Sessions"}}
          sort: {fields: data___Start order: ASC}
          )
        {edges
          {node 
            {data {
              Record_Id
              Name
              Type
              Start (formatString: "DD hh:mm")
              End (formatString: "DD hh:mm A")
              Presentations {
                data {
                  Title
                  Description
                  Record_Id
                  Speaker {
                    data {
                      Name
                      Organization
                      Record_Id
                    }
                  }
                }
              }
              }
            }
          }
        }
      }
    `)
    
    const sessions = data.allAirtable.edges.map(session => session.node.data)
    const firstDaySessions = sessions.filter(session => session.Start.includes('27'))
    const secondDaySessions = sessions.filter(session => session.Start.includes('28'))

    return ( 
        <ProgramContainer id='program'>
            <div className=" day day-1">
                <h2>Day 1</h2>
                <span className="date">27 January 2022</span>
                <div className="hr" aria-hidden="true"></div>
                <ol className="program-items">
                  {
                    firstDaySessions.map(session => (
                      <SessionCard key={session.Record_Id} sessionDetails={session}/>
                    ))
                  }
                </ol>
            </div>
            <div className=" day day-2">
                <h2>Day 2</h2>
                <span className="date">28 January 2022</span>
                <div className="hr" aria-hidden="true"></div>
                <ol className="program-items">
                  {
                    secondDaySessions.map(session => (
                      <SessionCard key={session.Record_Id} sessionDetails={session}/>
                    ))
                  }
                </ol>
            
            </div>
            <div className=" day day-1">
                <h2>Day 3</h2>
                <span className="date">29 January 2022</span>
                <p>Kiwasco will offer technical tours on the third day. More information will follow. Let us know if you'd like to participate.</p>
                {/* <div className="hr" aria-hidden="true"></div>
                <ol className="program-items">
                  {
                    firstDaySessions.map(session => (
                      <SessionCard key={session.Record_Id} sessionDetails={session}/>
                    ))
                  }
                </ol> */}
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