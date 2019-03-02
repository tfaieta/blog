import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Latest from './Latest.png'

class LatestBlogPost extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
    }

    this.openBook = this.openBook.bind(this)
  }

  openBook() {
    this.setState({
      clicked: !this.state.clicked,
    })
  }

  render() {
    return this.state.clicked ? (
      <ScaledBook>
        <TextWrapper>
          <Title>Notes on Twitter</Title>
          <Caption>
            For the past 12 months I haven’t had any main social media app
            installed on my phone (except Reddit and Medium). I’ve found that
            for productivity reasons and for my mental health it’s better to not
            have these apps on my phone, but the other day I finished reading
            “Hatching Twitter”, by Nick Bilton.
          </Caption>
        </TextWrapper>
        <BookLine />
      </ScaledBook>
    ) : (
      <ButtonWrapper onClick={this.openBook}>
        <img src={Latest} />
      </ButtonWrapper>
    )
  }
}

export default LatestBlogPost

const ButtonWrapper = styled.button`
  position: absolute;
  bottom: 4.5%;
  left: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 150ms linear;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  img {
    height: 150px;
  }

  &:hover {
    transition: all 150ms linear;
    opacity: 0.85;
  }
  &:active {
    transition: all 150ms linear;
    opacity: 0.55;
  }

  &:focus {
    outline: none;
  }
`

const ScaledBook = styled.div`
  position: absolute;
  width: 802px;
  height: 925px;
  left: 20%;
  top: 10px;

  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.5);
  background: linear-gradient(140.24deg, #3fabba 17.99%, #7c68f8 81.8%);
`
const BookLine = styled.div`
  width: 22.74px;
  position: absolute;
  height: 925px;
  margin-left: 20px;
  margin-top: -339px;
  background: #faf8ea;
`

const TextWrapper = styled.div`
  padding: 0px 0px 0px -10px;
  margin: 0px 0px 0px 100px;
`

const Title = styled.h1`
  letter-spacing: -0.03em;
  font-size: 5em;
  font-weight: 700;
  line-height: 1.1;
  text-align: left;
  color: #faf8ea;
`
const Caption = styled.p`
  letter-spacing: -0.04em;
  font-size: 1.4eem;
  font-weight: 500;
  line-height: 2;
  text-align: left;
  color: #faf8ea;
`
