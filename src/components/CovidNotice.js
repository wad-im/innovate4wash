import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const CovidNotice = () => {
  return (
    <CovidNoticeContainer>
      <h2>Covid-19</h2>
      <div>
        <p>
          Let us stay safe together. Check our actions to contribute to it
          during the event in the{" "}
          <Link to="/logistics">Innovate4WASH logistics info.</Link>
        </p>
        <p>Want to attend virtually? Let us know! It is possible!</p>
      </div>
    </CovidNoticeContainer>
  )
}

export default CovidNotice

const CovidNoticeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin: 2rem 0;
  border: #06efef solid 0.1rem;
  color: #06efef;
  a {
    color: #06efef;
    text-decoration: underline;
  }
  @media screen and (max-width: 994px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (max-width: 588px) {
    padding: 1rem;
  }
`
