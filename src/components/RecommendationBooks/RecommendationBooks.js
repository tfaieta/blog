import React from "react"
import styled from "styled-components"
import Book from "../book/book"
import blogs from "./blogs.png"
import books from "./books.png"
import podcasts from "./podcasts.png"
import { Flex, Box } from "@rebass/grid"
import BookWrapper from "../booksWrapper/booksWrapper"

const RecommendationBooks = () => {
  return (
    <BookWrapper>
      <Flex flexDirection="row" flexWrap="wrap">
        <Box mr={2} ml={2} px={3}>
          <Book>
            <img alt="" src={blogs} />
          </Book>
        </Box>
        <Box mr={2} ml={2} px={3}>
          <Book>
            <img alt="" src={books} />
          </Book>
        </Box>
        <Box mr={2} ml={2} px={3}>
          <Book>
            <img alt="" src={podcasts} />
          </Book>
        </Box>
      </Flex>
    </BookWrapper>
  )
}

export default RecommendationBooks
