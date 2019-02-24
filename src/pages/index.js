import React from 'react'
import styled from 'styled-components'
import { shelves } from './shelveData'
import '../styles/styles.css'
import Book from '../components/Book/book'

class BlogIndex extends React.Component {
  render() {
    return (
      <Container>
        {shelves.map((shelf, index) => (
          <BookShelf>
            <Text key={index}>{shelf.text}</Text>
            {shelf.books ? (
              <Books>
                <Book gradientOne="#F38141" gradientTwo="#FF89B9" />
                <Book gradientOne="#3e4164" gradientTwo="#3e4164" />
                <Book gradientOne="#F38141" gradientTwo="#FF89B9" />
              </Books>
            ) : (
              <div />
            )}
          </BookShelf>
        ))}
      </Container>
    )
  }
}

export default BlogIndex

const Container = styled.div`
  background: #272c2f;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  height: 1000px;
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-rows: repeat(5, auto);
  align-items: center;
  justify-items: center;
`

const BookShelf = styled.div`
  width: 726px;
  height: 31px;
  background: #faf8ea;
`

const Books = styled.div`
  margin: -127px 0px 0px 0px;
  z-index: 100;
`

const Text = styled.p`
  color: #faf8ea;
  text-align: left;
  margin: -30px 0px 0px 2px;
  font-size: 22px;
  letter-spacing: -0.04em;
  font-weight: 740;
`
