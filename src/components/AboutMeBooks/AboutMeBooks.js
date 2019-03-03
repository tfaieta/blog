import React from 'react'
import styled from 'styled-components'
import Book from '../Book/Book'
import Bio from './Bio.png'
import Projects from './Projects.png'
import Resume from './Resume.png'
import Skills from './Skills.png'

const AboutMeBooks = () => {
  return (
    <Wrapper>
      <Book>
        <img src={Bio} />
      </Book>
      <Book>
        <img src={Projects} />
      </Book>
      <Book>
        <img src={Resume} />
      </Book>
      <Book>
        <img src={Skills} />
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
