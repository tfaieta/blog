import React from 'react'
import styled from 'styled-components'
import Book from '../Book/Book'
import bookOne from './2019.png'
import bookTwo from './2018.png'

const BlogBooks = () => {
  return (
    <Wrapper>
      <Book>
        <img src={bookOne} />
      </Book>
      <Book>
        <img src={bookTwo} />
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
