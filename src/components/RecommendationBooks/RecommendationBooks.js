import React from "react"
import styled from "styled-components"
import Book from "../book/book"
import blogs from "./blogs.png"
import books from "./books.png"
import podcasts from "./podcasts.png"

const RecommendationBooks = () => {
  return (
    <Wrapper>
      <Book>
        <img alt="" src={blogs} />
      </Book>
      <Book>
        <img alt="" src={books} />
      </Book>
      <Book>
        <img alt="" src={podcasts} />
      </Book>
    </Wrapper>
  )
}

export default RecommendationBooks

const Wrapper = styled.div`
  img {
    height: 160px;
  }
`
