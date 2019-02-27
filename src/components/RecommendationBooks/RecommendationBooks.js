import React from 'react'
import styled from 'styled-components'
import Book from '../Book/book'
import Blogs from './Blogs.png'
import Books from './Books.png'
import Podcasts from './Podcasts.png'

const RecommendationBooks = () => {
  return (
    <Wrapper>
      <Book>
        <img src={Blogs} />
      </Book>
      <Book>
        <img src={Books} />
      </Book>
      <Book>
        <img src={Podcasts} />
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
