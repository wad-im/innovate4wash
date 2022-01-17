import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby'
import ConferenceDay from './ConferenceDay';

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
                      Website
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
            <ConferenceDay conferenceDay='Day 1' sessions={firstDaySessions}/>
            <ConferenceDay conferenceDay='Day 2' sessions={secondDaySessions}/>
            <ConferenceDay conferenceDay='Day 3' />
        </ProgramContainer>
     );
}
 
export default Program;

const ProgramContainer = styled.section`
    margin-top: 3.052rem;
    
`