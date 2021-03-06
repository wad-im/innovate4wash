import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import ConferenceDay from "./ConferenceDay"
import ParticipatingOrganization from "./ParticipatingOrganizations"

const Program = () => {
  const data = useStaticQuery(graphql`
    query {
      allAirtable(
        filter: { table: { eq: "Sessions" } }
        sort: { fields: data___Start, order: ASC }
      ) {
        edges {
          node {
            data {
              Record_Id
              Name
              Type
              Start(formatString: "DD hh:mm")
              End(formatString: "DD hh:mm A")
              Presentations {
                data {
                  Title
                  Description
                  Record_Id
                  Attachments {
                    url
                  }
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
  const firstDaySessions = sessions.filter(session =>
    session.Start.includes("27")
  )
  const secondDaySessions = sessions.filter(session =>
    session.Start.includes("28")
  )
  const thirdDaySessions = sessions.filter(session =>
    session.Start.includes("29")
  )

  return (
    <ProgramContainer id="program">
      <ConferenceDay conferenceDay="Day 1" sessions={firstDaySessions} />
      <ParticipatingOrganization />
      <ConferenceDay conferenceDay="Day 2" sessions={secondDaySessions} />
      <ConferenceDay conferenceDay="Day 3" sessions={thirdDaySessions} />
    </ProgramContainer>
  )
}

export default Program

const ProgramContainer = styled.section`
  margin-top: 3.052rem;
`
