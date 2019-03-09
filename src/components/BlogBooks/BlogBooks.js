import React from "react"
import styled from "styled-components"
import Book from "../book/book"
import bookOne from "./2019.png"
import bookTwo from "./2018.png"

const BlogBooks = () => {
  return (
    <Wrapper>
      <Book>
        <img alt="" src={bookOne} />
      </Book>
      <Book>
        <img alt="" src={bookTwo} />
      </Book>
    </Wrapper>
  )
}

export default BlogBooks

const Wrapper = styled.div`
  img {
    height: 160px;
  }
`
