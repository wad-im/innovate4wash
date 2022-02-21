import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { IconDiamond, IconAward } from "@tabler/icons"

const SponsorsAndPartners = () => {
  const data = useStaticQuery(graphql`
    query {
      allAirtable(
        filter: { table: { eq: "Sponsors/Partners" } }
        sort: { fields: data___Display_Order, order: ASC }
      ) {
        edges {
          node {
            data {
              Name
              Website
              Record_Id
              Partner_Type
              Display_Order
            }
          }
        }
      }
    }
  `)

  const organizations = data.allAirtable.edges

  return (
    <SponsorsDisplay>
      <p>
        Innovate4WASH 2022 is an initiative by{" "}
        <strong>
          <a href="https://quercus-group.com/">Quercus Group</a>
        </strong>{" "}
        powered and supported by
      </p>
      <div className="display-container">
        {organizations.map(organization => {
          return (
            <Tag
              className="tag"
              key={organization.node.data["Record_Id"]}
              partnertype={organization.node.data.Partner_Type}
            >
              {organization.node.data.Partner_Type === "Premium Sponsor" ? (
                <IconDiamond className="icon" />
              ) : organization.node.data.Partner_Type === "Bronze Sponsor" ? (
                <IconAward className="icon" />
              ) : null}
              <a href={organization.node.data["Website"]}>
                {organization.node.data["Name"]}
              </a>
            </Tag>
          )
        })}
      </div>
    </SponsorsDisplay>
  )
}

export default SponsorsAndPartners

const SponsorsDisplay = styled.section`
  padding: 0rem 2rem;
  .display-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  @media screen and (max-width: 588px) {
    padding: 0rem 1rem;
  }
`

const Tag = styled.span`
  display: inline-flex;
  vertical-align: top;
  -webkit-box-align: center;
  align-items: center;
  max-width: 100%;
  max-height: fit-content;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.2;
  outline: transparent solid 2px;
  outline-offset: 2px;
  min-height: 2rem;
  min-width: fit-content;
  border-radius: 0.375rem;
  padding-inline-start: 0.5rem;
  padding-inline-end: 0.5rem;
  margin: 0.25rem 0.25rem 0.25rem 0.25rem;
  color: #fff;
  background-color: ${props =>
    props.partnertype === "Premium Sponsor"
      ? "#9E8C2C"
      : props.partnertype === "Bronze Sponsor"
      ? "#9E4715"
      : "rgb(13,82,79)"};
  .icon {
    margin-right: 0.5rem;
  }
  @media screen and (max-width: 588px) {
    height: fit-content;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
`
