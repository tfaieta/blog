import React from "react"
import styled from "styled-components"
import Book from "../book/book"
import bio from "./bio.png"
import projects from "./projects.png"
import resume from "./resume.png"
import skills from "./skills.png"

const AboutMeBooks = () => {
  return (
    <Wrapper>
      <Book>
        <img alt="" src={bio} />
      </Book>
      <Book>
        <img alt="" src={projects} />
      </Book>
      <Book>
        <img alt="" src={resume} />
      </Book>
      <Book>
        <img alt="" src={skills} />
      </Book>
    </Wrapper>
  )
}

export default AboutMeBooks

const Wrapper = styled.div`
  img {
    height: 160px;
  }
`
